<template>
<div>
  <div class="row">
    <div class="col-8 offset-2">
      <div class="row">
        <div v-for="(topic, index) in selectTopics()" :key="index" class="col-6 col-sm align-middle p-2">
          <div class="card">
            <img src="../assets/images/vin1.png" class="card-img">
            <div class="card-img-overlay h-100 d-flex align-items-center justify-content-center">
              <h4> <router-link :to="{ name: 'Conversation', params: { topic: topic.slug }}">{{ topic.name }} </router-link> </h4>
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
          .map(a => ({ slug: a[0], name: a[1].topic })) // return object with slug an topic
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
