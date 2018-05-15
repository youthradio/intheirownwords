<template>
  <main id="conversation">
    <div class="row">
      <div class="col-10 offset-1 col-md-8 offset-md-2">
        <div class="row text-center pt-3 sticky-top fixed-topic">
          <!--selected -->
          <div class="col-12">
            <h3 class="d-none d-md-inline" v-if="selectedTopic">{{ selectedTopic.name }}</h3>
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
          <div :class="[index%2 == 0?'order-1':'order-2', 'col-3', 'col-md-2', 'p-1']">
            <img class="img-fluid " :src="require('../assets/images/' + line.image )">
          </div>
          <div :class="[line.cssclass, index%2 == 0?'order-2':'order-1 curve-right','my-auto', 'col-9']" :id="`transcript-${index}`">
            <div :class="['card m-1', `${line.cssclass}-border`]">
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>{{line.passage}}</p>
                </blockquote>
              </div>
            </div>
            <div v-if="index == activeLine " :class="['progress-bar m-1', (index !== activeLine) ? 'progress-out-fast' : '']" :style="{width: progress}">
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import { Plyr } from 'vue-plyr'
import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill()

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
      var out = []
      this.$store.state.allTopics[this.topic].transcript.forEach((line, index) => {
        const textRecord = Object.entries(line).splice(2) // splice audio start end, leaving names and passages
        const name = textRecord.filter(e => e[1] !== '')[0][0] // filter name, only not empty passage
        const passage = textRecord.filter(e => e[1] !== '')[0][1] // filter passage
        out.push({
          name: name,
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
</style>
