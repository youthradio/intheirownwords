<template>
  <main id="conversation">
    <div class="row">
      <div :class="[!isIframe?'col-md-8 offset-md-2':'','col-12']">
        <div
          id="player-container"
          class="row text-center pt-3 sticky-top fixed-topic">
          <!--selected -->
          <div class="col-12">
            <h3 v-if="selectedTopic">{{ selectedTopic.name }}</h3>
            <VuePlyr
              v-if="selectedTopic"
              ref="audioPlayer"
              :options="playerOptions"
              :emit="['play','pause','timeupdate','ready','canplay','seeking']"
              class="player-custom-style"
              @seeking="onSeek"
              @play="onAudioPlay"
              @pause="onAudioPause"
              @timeupdate="onTime"
              @ready="onPlayerReady"
              @canplay="audioReady">
              <audio>
                <source
                  :src="require('../assets/audio/' + `${selectedTopic.audio}.mp3`)"
                  type="audio/mp3">
                <source
                  :src="require('../assets/audio/' + `${selectedTopic.audio}.ogg`)"
                  type="audio/ogg">
                Your browser does not support the audio tag.
              </audio>
            </VuePlyr>
          </div>

        </div>

        <div
          v-for="(line, index) in transcriptData"
          :key="index"
          :class="[(index == activeLine) || enableTranscript ? 'active' : 'inactive','row my-auto']">
          <div :class="[line.posLeft?'order-1':'order-2', 'col-3', 'col-md-2', 'p-1']">
            <router-link
              v-if="line.image"
              :to="{ name: 'PersonRoute', params: { person: line.name }}">
              <img
                :src="require('../assets/images/' + line.image )"
                class="img-fluid img-limit profile-shadow">
            </router-link>
          </div>
          <div
            :class="[line.cssclass, line.posLeft?'order-2':'order-1 curve-right','my-auto', 'col-9']"
            :id="`transcript-${index}`">
            <div :class="['card m-1', `${line.cssclass}-border`]">
              <div class="card-body custom-padding">
                <blockquote class="blockquote mb-0">
                  <p>{{ line.passage }}</p>

                  <a
                    class="hand-over"
                    title="Share on Twitter"
                    @click="tweetMessage(line.name, line.passage)">
                    <svg
                      id="White"
                      class="float-right"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 400 400"
                      style="enable-background:new 0 0 400 400;"
                      xml:space="preserve">
                      <path
                        class="st0"
                        d="M400,400H0V0h400V400z M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6  c10-7.2,18.7-16.3,25.6-26.6c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4  c-9.4-10-22.7-16.2-37.4-16.2c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6  c-4.4,7.6-6.9,16.4-6.9,25.8c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3  c-4.3,1.2-8.8,1.8-13.5,1.8c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22  c-4.1,0-8.2-0.2-12.2-0.7C97.7,293.1,124.7,301.6,153.6,301.6" />
                    </svg>
                  </a>
                </blockquote>
              </div>
            </div>
            <div
              v-if="index == activeLine "
              :class="['progress-bar m-1', (index !== activeLine) ? 'progress-out-fast' : '']"
              :style="{width: progress}" />
          </div>
        </div>
        <div
          v-if="!isIframe"
          class="row justify-content-center align-items-center mt-3 hand-over"
          @click="scrollTop">
          <svg
            width="30"
            height="30"
            class="octicon octicon-triangle-up"
            fill="gray"
            viewBox="0 0 12 16"
            version="1.1"
            aria-hidden="true"><path
              fill-rule="evenodd"
              d="M12 11L6 5l-6 6h12z" /></svg>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import VuePlyr from './VuePlyr.vue'
import CommonUtils from '../mixins/CommonUtils'

export default {
  name: 'MConversation',
  components:{
    VuePlyr
  },
  mixins: [
    CommonUtils,
  ],
  props: {
    topic: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      lastCurrTime: 0,
      progress: '0%',
      audioDuration: 0,
      activeLine: 0,
      enableTranscript: true
    }
  },
  computed: {
    playerOptions () {
      return {
        iconUrl: process.env.BASE_URL + 'plyr.svg',
        'volume': 1,
        controls: [
          'play-large', // The large play button in the center
          // 'restart', // Restart playback
          // 'rewind', // Rewind by the seek time (default 10 seconds)
          'play', // Play/pause playback
          // 'fast-forward', // Fast forward by the seek time (default 10 seconds)
          'progress', // The progress bar and scrubber for playback and buffering
          'current-time', // The current time of playback
          // 'duration', // The full duration of the media
          'mute', // Toggle mute
          'volume', // Volume control
          'pip', // Picture-in-picture (currently Safari only)
          'airplay' // Airplay (currently Safari only)
          // 'settings' // Settings menu
        ]
      }
    },
    count () {
      return this.$store.state.count
    },
    selectedTopic () {
      return ({
        slug: this.$store.state.allTopics[this.topic].slug,
        name: this.$store.state.allTopics[this.topic].topic,
        audio: this.$store.state.allTopics[this.topic].topicAudio
      })
    },
    transcriptData () {
      let out = []
      let posLeft = false
      let lastName = ''
      this.$store.state.allTopics[this.topic].transcript.forEach(line => {
        const textRecord = Object.entries(line).splice(2) // splice audio start end, leaving names and passages
        const name = textRecord.filter(e => e[1] !== '')[0][0] // filter name, only not empty passage
        const passage = textRecord.filter(e => e[1] !== '')[0][1] // filter passage
        let img = null
        if (lastName !== name) {
          posLeft = !posLeft
          img = name
        }
        lastName = name
        out.push({
          name: name,
          posLeft: posLeft,
          passage: passage,
          image: img ? this.$store.state.allPeople[name].info.Person_Image : img,
          cssclass: this.$store.state.allPeople[name].info.Person_Class,
          start: this.getSeconds(line.Audio_Start), // Audio start
          end: this.getSeconds(line.Audio_End) // Audio end
        })
      })
      return out
    }
  },
  watch: {
    topic () {
      this.activeLine = 0
      this.$refs.audioPlayer.player.media.load()
    }
  },
  created () {
  },
  methods: {
    onSeek () {
      // find active live when audion seeking
      const currTime = this.$refs.audioPlayer.player.currentTime
      this.enableTranscript = false // make transcript opaque
      this.transcriptData.forEach((e, i) => {
        const start = e.start
        const end = e.end
        if (currTime > start && currTime < end) {
          this.activeLine = i
          this.scrollTo(this.activeLine)
        }
      })
    },
    onTime () {
      this.audioDuration = this.$refs.audioPlayer.player.duration
      const currTime = this.$refs.audioPlayer.player.currentTime
      const start = this.transcriptData[this.activeLine].start
      const end = this.transcriptData[this.activeLine].end
      this.progress = (100 * (currTime - start) / (end - start)) + '%'
      if (currTime >= end) {
        this.progress = '0%'
        this.activeLine = (this.activeLine + 1) % this.transcriptData.length
        this.scrollTo(this.activeLine)
      }
    },
    onAudioPlay () {
      // console.log(this.$refs.audioPlayer.player.currentTime)
      this.scrollTo(this.activeLine)
      this.enableTranscript = false // make transcript opaque
    },
    onAudioPause () {
      this.enableTranscript = true // make transcript visible
    },
    onPlayerReady () {
    },
    audioReady () {
      // console.log('aduio readaaaaaaa')
    },
    getSeconds (timestamp) {
      const t = timestamp.split(':')
      const sm = [3600, 60, 1]
      return t.map((m, i) => m * sm[i]).reduce((a, b) => a + b) // return total in seconds
    },
    scrollTo (index) {
      if (!this.isIframe) {
        const titleBoxH = this.$el.querySelector('.fixed-topic').getBoundingClientRect().height
        const transcriptTop = this.$el.querySelector(`#transcript-${index}`).getBoundingClientRect().top
        window.scroll({ top: transcriptTop + window.scrollY - titleBoxH - 5, behavior: 'smooth' })
      } else {
        const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0  // eslint-disable-line
        const isFirefox = typeof InstallTrigger !== 'undefined'
        const isChrome = !!window.chrome && !!window.chrome.webstore
        const transcriptEl = this.$el.querySelector(`#transcript-${index}`)
        if (isOpera || isFirefox || isChrome) {
          transcriptEl.scrollIntoView({ behavior: 'smooth' })
        } else {
          transcriptEl.scrollIntoView(false)
        }
      }
    },
    scrollTop () {
      window.scroll({
        top: this.$root.$el.querySelector('#menu'),
        behavior: 'smooth'
      })
    },
    tweetMessage (person, msg) {
      const url = 'https://yr.media/intheirownwords'
      const tweet = `#InTheirOwnWords: “${msg}” - via @itsyrmedia ${url}`
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`
      window.open(tweetUrl, 'pop', 'width=600, height=400, scrollbars=no')
    }
  },
  // mounted () {
  //   const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent'
  //   const eventer = window[eventMethod]
  //   const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message'
  //   // Listen for event
  //   eventer(messageEvent, (e) => {
  //     // Check that message being passed is the documentHeight
  //     if ((typeof e.data === 'string') &&
  //         (e.data.indexOf('iframeTop:') > -1) &&
  //         (e.data.indexOf('scrollY:') > -1)) {
  //       const values = e.data.split(',')
  //
  //       const iframeTop = parseFloat(values[0].split('iframeTop:')[1])
  //       const scrollY = parseFloat(values[1].split('scrollY:')[1])
  //       const playerEle = this.$el.querySelector('#player-container')
  //       const playerContainer = this.$el
  //
  //       const playerContainerTop = parseFloat(playerContainer.getBoundingClientRect().top)
  //
  //       if (scrollY > iframeTop + playerContainerTop) {
  //         playerEle.style.position = 'relative'
  //         playerEle.style.top = (scrollY - iframeTop - playerContainerTop + 29) + 'px'
  //         // console.log('Received', iframeTop, scrollY, (iframeTop + playerContainerTop))
  //       } else {
  //         playerEle.style.top = '0px'
  //       }
  //       // do stuff with the height
  //       // document.getElementById('yritow').height = height + 'px';
  //     }
  //   }, false)
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player-custom-style >>> .plyr--audio .plyr__controls {
  background: none;
}
.progress-bar {
  background-color: #1aafff;
  height:10px;
}
.progress-out-fast {
  width: 0%;
  -webkit-transition: width 0s ease-in-out;
  -moz-transition: width 0s ease-in-out;
  -o-transition: width 0s ease-in-out;
  transition: width 0s ease-in-out;
}
.fixed-topic {
  background: #FFFFFF;
}
.custom-padding {
  padding: 0.30rem;
}
.active {
  opacity: 1;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}
.inactive {
  opacity: 0.3;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}
h3 {
  color: gray;
}
</style>
