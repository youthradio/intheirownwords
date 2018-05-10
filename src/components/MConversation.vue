<template>
  <main id="conversation">
    <div class="row">
      <div class="col-10 offset-1 col-md-8 offset-md-2">
        <div class="row text-center py-4">
          <!--selected -->
          <div class="col-12">
            <h1 v-if="selectedTopic">{{ selectedTopic.name }}</h1>
            <Plyr class="player-custom-style" :options="playerOptions" ref="audioPlayer" :emit="['play','timeupdate']" @play="onAudioPlay" @timeupdate="onTime">
                  <audio>
                    <source src="../assets/audio/a.mp3" type="audio/mp3">
                    Your browser does not support the audio tag.
                  </audio>
            </Plyr>
          </div>

        </div>

        <div v-for="(person, passage, index) in selectedTopicTranscripts()" :key="index" class="row my-auto">
          <div class="order-1 col-3 col-md-2 my-auto p-1">
            <img class="img-fluid " src="../assets/images/jen.svg">
          </div>
          <div class="order-2 col-9 p3text ">
            <div class="chat">
              <p class=" "> "There are still times when I wish my skin was clay, so I could sculpt away the feminine qualities I see in my face. " </p>
              <p v-for="(a, index) in getTextLine(person)" :key="`passage-${index}`" class="">{{a}} : {{index}}</p>
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
    }
  },
  methods: {
    selectedTopicTranscripts () {
      if (this.topics) {
        return this.topics[this.topic].transcript
      } else {
        return null
      }
    },
    getTextLine (value) {
      const textRecord = Object.entries(value).splice(3)
      if (!value) return ''
      return textRecord.filter(e => e[1] !== '')[0] // return only record with text
    },
    onTime (value) {
      console.log(this.$refs.audioPlayer.player.currentTime)
    },
    onAudioPlay (value) {
      console.log(this.$refs.audioPlayer.player.currentTime)
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
          name: this.topics[this.topic].topic
        })
      } else {
        return null
      }
    }
  },
  data () {
    return {
      msg: 'conversation'
    }
  },
  // created () {
  //   this.$root.$emit('triggerScroll')
  // },
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

</style>
