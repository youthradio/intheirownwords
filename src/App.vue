<template>
  <div id="app">
    <div
    class="container-fluid">
      <router-view name="header"/>
      <router-view name="profile"/>
      <router-view name="section"/>
      <router-view :topics="allTopics" name="topics"/>
      <router-view name="conversation"/>
      <router-view name="footer"/>
      <router-view name="notfound"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      loading: false,
      appData: null,
      allTopics: null
    }
  },
  watch: {
    /**
    * Filters data data is fetched
    */
    appData: function () {
      this.allTopics = this.getTopics()
    }
  },
  methods: {
    fetchData () {
      this.loading = true
      fetch('https://gist.githubusercontent.com/radames/49a68c2631890b7934025b4402cb2619/raw/968b21c84b611c5ee6957c9c85dd897409569453/alldata.json')
        .then(d => d.json())
        .then(data => {
          this.loading = false
          this.appData = data
          console.log(data)
        })
    },
    getTopics: function () {
      return this.appData.data.reduce((a, b) => {
        a[b.Topic] = {
          people: b.People.split(',').map(t => t.trim()),
          transcript: this.appData[`transcript-${b.ID}`]
        }
        return a
      }, {})
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Ramabhadra");
  @import url("https://fonts.googleapis.com/css?family=Montserrat");
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,800");
  #app {
  }
</style>
