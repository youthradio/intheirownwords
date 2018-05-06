<template>
<div>
  <div class="row text-center my-5">
    <div class="col-4 my-auto">
      <hr>
    </div>
    <div class="col-4">
      <h2>
        In Conversation About
      </h2>
    </div>

    <div class="col-4 my-auto">
      <hr>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2">

      <div class="row">
        <div class="col-12 col-md-4 align-middle">
          <div class="card">
            <img src="../assets/images/vin1.png" class="card-img">
            <div class="card-img-overlay h-100 d-flex align-items-center justify-content-center">
              <h4> <router-link :to="{ name: 'Conversation', params: { topic: 'Presentation' }}">Presentation</router-link> </h4>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="card">
            <img src="../assets/images/vin2.png" class="card-img">
            <div class="card-img-overlay h-100 d-flex align-items-center justify-content-center">
              <h4> <router-link :to="{ name: 'Conversation', params: { topic: 'Race-and-Identity' }}">Race & Identity</router-link> </h4>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="card">
            <img src="../assets/images/vin3.svg" class="card-img">
            <div class="card-img-overlay h-100 d-flex align-items-center justify-content-center">
              <h4> <router-link :to="{ name: 'Conversation', params: { topic: 'Love-and-Dating' }}">Love & Dating</router-link> </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['topics'],
  name: 'MTopics',
  data () {
    return {
      msg: 'ERROR - ERROR'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
