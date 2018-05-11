<template>
  <main id="conversation">
    <div class="row">
      <div class="col-10 offset-1 col-md-8 offset-md-2">
        <div class="row text-center py-4">
          <!--selected -->
          <div class="col-12">
            <h1 v-if="selectedTopic">{{ selectedTopic.name }}</h1>
            <Plyr class="player-custom-style" :options="playerOptions" ref="audioPlayer" :emit="['play','timeupdate','ready']" @play="onAudioPlay" @timeupdate="onTime" @ready="onPlayerReady" v-if="selectedTopic">
                  <audio>
                    <source :src="require('../assets/audio/' + `${selectedTopic.audio}.mp3`)" type="audio/mp3">
                    <source :src="require('../assets/audio/' + `${selectedTopic.audio}.ogg`)" type="audio/ogg">
                    Your browser does not support the audio tag.
                  </audio>
            </Plyr>
          </div>

        </div>

        <div v-for="(line, index) in transcriptData" :key="index" class="row my-auto">
          <div class="order-1 col-3 col-md-2 my-auto p-1">
            <img class="img-fluid " :src="require('../assets/images/' + line.image )">
          </div>
          <div class="order-2 col-9 p3text ">
            <div :class="`${line.cssclass}`">
              <p>{{line.passage}}</p>
            </div>
            <div v-if="line.active" class="progress-bar" :style="{width: progress}">
              s
            </div>
          </div>
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
    },
    topics: {
      type: Object
    },
    people: {
      type: Object
    }
  },
  methods: {
    onTime () {
      this.audioDuration = this.$refs.audioPlayer.player.duration
      this.progress = (100 * this.$refs.audioPlayer.player.currentTime / this.audioDuration) + '%'
    },
    onAudioPlay () {
      console.log(this.$refs.audioPlayer.player.currentTime)
    },
    onPlayerReady () {
    },
    getSeconds (timestamp) {
      const t = timestamp.split(':')
      const sm = [3600, 60, 1]
      return t.map((m, i) => m * sm[i]).reduce((a, b) => a + b) // return total in seconds
    },
    selectedTopicTranscripts () {
      var out = []
      this.topics[this.topic].transcript.forEach((line) => {
        const textRecord = Object.entries(line).splice(2) // splice audio start end, leaving names and passages
        const name = textRecord.filter(e => e[1] !== '')[0][0] // filter name, only not empty passage
        const passage = textRecord.filter(e => e[1] !== '')[0][1] // filter passage
        out.push({
          name: name,
          passage: passage,
          image: this.people[name].info.Person_Image,
          cssclass: this.people[name].info.Person_Class,
          start: this.getSeconds(line.Audio_Start), // Audio start
          end: this.getSeconds(line.Audio_End), // Audio end
          active: false // progress bar feature
        })
      })
      this.transcriptData = out
    }
  },
  watch: {
    topic () {
      this.selectedTopicTranscripts()
      this.$refs.audioPlayer.player.media.load()
    },
    topics () {
      this.selectedTopicTranscripts()
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
    selectedTopic () {
      if (this.topics) {
        return ({
          slug: this.topics[this.topic].slug,
          name: this.topics[this.topic].topic,
          audio: this.topics[this.topic].topicAudio
        })
      } else {
        return null
      }
    }
  },
  data () {
    return {
      transcriptData: null,
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
.progress-bar{
  background-color: red;
}

</style>
