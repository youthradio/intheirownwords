<template>
  <main id="conversation">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <div class="row text-center pt-3 sticky-top fixed-topic">
          <!--selected -->
          <div class="col-12">
            <h3 v-if="selectedTopic">{{ selectedTopic.name }}</h3>
            <Plyr class="player-custom-style" :options="playerOptions" ref="audioPlayer" :emit="['play','timeupdate','ready','canplay','seeking']" @seeking="onSeek" @play="onAudioPlay" @timeupdate="onTime" @ready="onPlayerReady" @canplay="audioReady" v-if="selectedTopic">
                  <audio>
                    <source :src="require('../assets/audio/' + `${selectedTopic.audio}.mp3`)" type="audio/mp3">
                    <source :src="require('../assets/audio/' + `${selectedTopic.audio}.ogg`)" type="audio/ogg">
                    Your browser does not support the audio tag.
                  </audio>
            </Plyr>
          </div>

        </div>

        <div v-for="(line, index) in transcriptData" :key="index" class="row my-auto">
          <div :class="[line.posLeft?'order-1':'order-2', 'col-3', 'col-md-2', 'p-1']">
            <img class="img-fluid" :src="require('../assets/images/' + line.image )">
          </div>
          <div :class="[line.cssclass, line.posLeft?'order-2':'order-1 curve-right','my-auto', 'col-9']" :id="`transcript-${index}`">
            <div :class="['card m-1', `${line.cssclass}-border`]">
              <div class="card-body custom-padding">
                <blockquote class="blockquote mb-0">
                  <p>{{line.passage}}</p>

                  <a class="hand-over" v-on:click="tweetMessage(line.passage)" title="Share on Twitter">
                    <svg class="float-right" width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="White" x="0px" y="0px" viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve">
                    <path class="st0" d="M400,400H0V0h400V400z M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6  c10-7.2,18.7-16.3,25.6-26.6c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4  c-9.4-10-22.7-16.2-37.4-16.2c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6  c-4.4,7.6-6.9,16.4-6.9,25.8c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3  c-4.3,1.2-8.8,1.8-13.5,1.8c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22  c-4.1,0-8.2-0.2-12.2-0.7C97.7,293.1,124.7,301.6,153.6,301.6"/>
                    </svg>
                  </a>
                </blockquote>
              </div>
            </div>
            <div v-if="index == activeLine " :class="['progress-bar m-1', (index !== activeLine) ? 'progress-out-fast' : '']" :style="{width: progress}">
            </div>
          </div>
        </div>
        <div v-on:click="scrollTop" class="row justify-content-center align-items-center mt-3 hand-over">
            <svg width="30" height="30" class="octicon octicon-triangle-up" fill="gray" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M12 11L6 5l-6 6h12z"></path></svg>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import { Plyr } from 'vue-plyr'

export default {
  name: 'MConversation',
  props: {
    topic: {
      type: String
    }
  },
  methods: {
    onSeek (e) {
      // find active live when audion seeking
      const currTime = this.$refs.audioPlayer.player.currentTime
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
      const titleBoxH = this.$el.querySelector('.fixed-topic').getBoundingClientRect().height
      const transcriptTop = this.$el.querySelector(`#transcript-${index}`).getBoundingClientRect().top
      window.scroll({ top: transcriptTop + window.scrollY - titleBoxH - 5, behavior: 'smooth' })
    },
    scrollTop () {
      window.scroll({
        top: this.$root.$el.querySelector('.splash-header').offsetHeight,
        behavior: 'smooth'
      })
    },
    tweetMessage (msg) {
      const url = 'https://www.youthradio.org'
      const hashtags = 'youthradio,theythem'
      const via = 'youthradio'
      const tweetUrl = `https://twitter.com/intent/tweet?text=${msg}&url=${url}&hastags=${hashtags}&via=${via}`
      window.open(tweetUrl, 'pop', 'width=600, height=400, scrollbars=no')
    }
  },
  watch: {
    topic () {
      this.activeLine = 0
      this.$refs.audioPlayer.player.media.load()
    }
  },
  computed: {
    playerOptions () {
      return {
        iconUrl: require('../../node_modules/plyr/dist/plyr.svg'),
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
      this.$store.state.allTopics[this.topic].transcript.forEach((line, index) => {
        const textRecord = Object.entries(line).splice(2) // splice audio start end, leaving names and passages
        const name = textRecord.filter(e => e[1] !== '')[0][0] // filter name, only not empty passage
        const passage = textRecord.filter(e => e[1] !== '')[0][1] // filter passage
        if (lastName !== name) {
          posLeft = !posLeft
        }
        lastName = name
        out.push({
          name: name,
          posLeft: posLeft,
          passage: passage,
          image: this.$store.state.allPeople[name].info.Person_Image,
          cssclass: this.$store.state.allPeople[name].info.Person_Class,
          start: this.getSeconds(line.Audio_Start), // Audio start
          end: this.getSeconds(line.Audio_End) // Audio end
        })
      })
      return out
    }
  },
  created () {
  },
  data () {
    return {
      lastCurrTime: 0,
      progress: '0%',
      audioDuration: 0,
      activeLine: 0
    }
  },
  components: {
    Plyr
  }
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
  background: #FCFCFC;
}
.custom-padding {
  padding: 0.30rem;
}
</style>
