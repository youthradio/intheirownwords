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
    <div class="col-8 offset-2">
      <div class="row">
        <div v-for="(data, topic, index) in topics" :key="index" class="col-6 col-sm align-middle p-2">
          <div class="card">
            <img src="../assets/images/vin1.png" class="card-img">
            <div class="card-img-overlay h-100 d-flex align-items-center justify-content-center">
              <h4> <router-link :to="{ name: 'Conversation', params: { topic: topic }}">{{ data | getValue('topic')}} </router-link> </h4>
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
  props: {
    topics: {
      type: Object
    }
  },
  name: 'MTopics',
  data () {
    return {
      msg: 'ERROR - ERROR'
    }
  },
  filters: {
    getValue (value, key) {
      return value[key]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
