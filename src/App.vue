<template>
    <div >
      <router-view name="header"/>
      <router-view :people="allPeople" name="profile"/>
      <router-view :people="allPeople" name="section"/>
      <router-view :topics="allTopics" name="topics"/>
      <router-view :topics="allTopics" name="conversation"/>
      <router-view name="footer"/>
      <router-view name="notfound"/>
    </div>
</template>

<script>

import AllData from './assets/data/alldata.json'

export default {
  name: 'App',
  data () {
    return {
      loading: false,
      appData: null,
      allTopics: null,
      allPeople: null
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.allTopics = this.getTopics()
      this.allPeople = this.getPeople()
    })
  },
  methods: {
    fetchData () {
      this.appData = AllData
      this.loading = false
      // fetch('assets/data/alldata.json')
      //   .then(d => d.json())
      //   .then(data => {
      //     this.loading = false
      //     this.appData = data
      //   })
    },
    getTopics () {
      return this.appData.data.reduce((a, b) => {
        a[slug(b.Topic)] = {
          topic: b.Topic,
          topicImg: b.Topic_Image,
          people: b.People.split(',').map(t => t.trim()),
          transcript: this.appData[`transcript-${b.ID}`]
        }
        return a
      }, {})
    },
    getPeople () {
      let p = {}
      Object.entries(this.allTopics).forEach((topic) => {
        topic[1].people.forEach(person => {
          if (!p[person]) {
            p[person] = {
              topics: [],
              info: this.appData.people.filter(e => e['Person_Name'] === person)[0]
            }
          }
          p[person].topics.push(topic[0])
        })
      })
      return p
    }
  },
  created () {
    this.fetchData()
  }
}
// https://gist.github.com/mathewbyrne/1280286
/*eslint-disable */
const slug = (e) => e.toString().toLowerCase().trim()
  .replace(/\s+/g, '-')
  .replace(/&/g, '-and-')
  .replace(/[^\w\-]+/g, '')
  .replace(/\-\-+/g, '-')
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Ramabhadra");
  @import url("https://fonts.googleapis.com/css?family=Montserrat");
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,800");
  #app {
  }
</style>
