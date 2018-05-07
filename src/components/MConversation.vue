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
        <div v-for="(transLine, index) in selectedTopicTranscripts" :key="index" class="row">
          {{transLine }}
          <div class="col-2">
            <img class="img-fluid person1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzA50b0MoyZUx7UxC8ccyvXpRRx6R7fAG_FhVVnhEhSVsiuUA">
          </div>
          <div class="col-10 p1text m-auto">
            <p class=""> transpircript</p>
          </div>

          <div class="col-10 text-right p3text m-auto">
            <p> thi si show i feel</p>
          </div>
          <div class="col-2">
            <img class="img-fluid person3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzA50b0MoyZUx7UxC8ccyvXpRRx6R7fAG_FhVVnhEhSVsiuUA">

          </div>

          <div class="col-2">
            <img class="img-fluid person1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzA50b0MoyZUx7UxC8ccyvXpRRx6R7fAG_FhVVnhEhSVsiuUA">

          </div>
          <div class="col-10 p1text m-auto">
            <p> words workds workds</p>
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
  created () {
    console.log('Conversation', this.topics, this.topic)
  },
  watch: {
    topics () {
      console.log('DONee', this.topics)
    }
  },
  computed: {
    selectedTopicTranscripts () {
      return this.topics[this.topic].transcript
    }
  },
  data () {
    return {
      msg: 'conversation'
    }
  },
  filters: {
    getLine: function (value) {
      console.log(value)
      console.log(value.filter(e => e !== ''))
      if (!value) return ''
      return null
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
