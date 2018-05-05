<template>
  <main>
    <div class="row text-center my-5">
      <div class="col-4 my-auto">
        <hr>
      </div>
      <div class="col-4">
        <h2>
          In Conversation About - {{topic}}</h2>
      </div>

      <div class="col-4 my-auto">
        <hr>
      </div>
    </div>
    <div class="row ">
      <div class="col-12 col-md-2 my-auto">

      </div>

      <div class="col-12  col-md-8">

        <div class="row text-center">
          <div class="col-12  col-md-4 ">
            <br>
            <img src="../assets/images/vin1.png" class="img-fluid">
            <br> <br>
            <h4> <router-link :to="{ name: 'Conversation', params: { topic: 'Presentation' }}">Presentation</router-link> </h4>
          </div>

          <div class="col-12 col-md-4">
            <img src="../assets/images/vin2.png" class="img-fluid">
            <h4> <router-link :to="{ name: 'Conversation', params: { topic: 'Race-and-Identity' }}">Race & Identity</router-link> </h4>
          </div>

          <div class="col-12 col-md-4">
            <img src="../assets/images/vin3.svg" class="img-fluid">

            <h4> <router-link :to="{ name: 'Conversation', params: { topic: 'Love-and-Dating' }}">Love & Dating</router-link> </h4>
          </div>
        </div>

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
        <div class="row">
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
      type: String,
      required: true
    }
  },
  data () {
    return {
      msg: 'conversation'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
