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
  watch: {
    appData: function () {
      this.allTopics = this.getTopics()
      this.allPeople = this.getPeople()
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
        })
    },
    getTopics () {
      return this.appData.data.reduce((a, b) => {
        a[b.Topic] = {
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
              info: this.appData.people.filter(e => e['Person  Name'] === person)[0]
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
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Ramabhadra");
  @import url("https://fonts.googleapis.com/css?family=Montserrat");
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,800");
  #app {
  }
</style>
