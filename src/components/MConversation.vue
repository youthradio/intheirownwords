<template>
  <main>

        <div class="row text-center py-4">
          <!--selected -->
          <div class="col-12">
            <img src="../assets/images/vin3.svg" class="img-fluid">
            <h2> Topic </h2>
            <audio controls>
                    <source src="horse.mp3" type="audio/mpeg">
                    Your browser does not support the audio tag.
                  </audio>
          </div>
        </div>
        <div v-for="(person, passage, index) in selectedTopicTranscripts()" :key="index" class="row">

          <div class="col-2">
            <img class="img-fluid person1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzA50b0MoyZUx7UxC8ccyvXpRRx6R7fAG_FhVVnhEhSVsiuUA">
          </div>
          <div class="col-10 p1text m-auto">
            <p v-for="(a, index) in getTextLine(person)" :key="`passage-${index}`" class="">{{a}} : {{index}}</p>
          </div>

        </div>
    <div class="col-12 col-md-4">
      <!--empty -->
    </div>
  </main>
</template>

<script>
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
    }
  },
  data () {
    return {
      msg: 'conversation'
    }
  },
  filters: {

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
