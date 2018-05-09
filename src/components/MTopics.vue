<template>
<div id="topics">
  <div class="row text-center my-5">
    <div class="col-12 col-md-4 my-auto">
      <hr>
    </div>
    <div class="col-12 col-md-4 text-center">
      <h2>
        In Conversation About</h2>
    </div>
    <div class="col-12 col-md-4 my-auto">
      <hr>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2">
      <div class="row text-center">
        <div class="col-12 col-md-3" v-for="(topic, index) in selectTopics()" :key="index">
          <router-link :to="{ name: 'Conversation', params: { topic: topic.slug }}">
            <img :src="require('../assets/images/' + topic.image)" class="img-fluid">
            </router-link>
          <br> <br>
          <h4>
            <router-link :to="{ name: 'Conversation', params: { topic: topic.slug }}">
              {{ topic.name }}
            </router-link> </h4>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    topic: {
      type: String
    },
    topics: {
      type: Object
    },
    person: {
      type: String,
      default: ''
    }
  },
  name: 'MTopics',
  data () {
    return {
      msg: 'ERROR - ERROR'
    }
  },
  methods: {
    selectTopics () {
      if (this.topics) {
        return Object.entries(this.topics)
          .filter(topic => this.person ? topic[1].people.filter(p => p === this.person).length > 0 : true) // filter all topics by person or return al;
          .map(a => ({
            slug: a[0],
            name: a[1].topic,
            image: a[1].topicImg
          })) // return object with slug an topic
      } else {
        return null
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
