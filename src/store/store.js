import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoading: false,
  allTopics: null,
  allPeople: null
}
const actions = {
  fetchData ({commit}) {
    const allData = require('../assets/data/alldata.json')
    commit('SET_DATA', allData)
  }
}
const mutations = {
  SET_DATA (state, allData) {
    state.allTopics = filterTopics(allData)
    state.allPeople = filterPeople(state.allTopics, allData)
  }
}
export default new Vuex.Store({
  mutations,
  state,
  actions
})

function filterTopics (appData) {
  return appData.data.reduce((a, b) => {
    a[slug(b.Topic)] = {
      topic: b.Topic,
      topicImg: b.Topic_Image,
      topicAudio: b.Audio,
      people: b.People.split(',').map(t => t.trim()),
      transcript: appData[`transcript-${b.ID}`]
    }
    return a
  }, {})
}

function filterPeople (allTopics, appData) {
  let p = {}
  Object.entries(allTopics).forEach((topic) => {
    topic[1].people.forEach(person => {
      if (!p[person]) {
        p[person] = {
          topics: [],
          info: appData.people.filter(e => e['Person_Name'] === person)[0]
        }
      }
      p[person].topics.push(topic[0])
    })
  })
  return p
}

// https://gist.github.com/mathewbyrne/1280286
/*eslint-disable */
const slug = (e) => e.toString().toLowerCase().trim()
  .replace(/\s+/g, '-')
  .replace(/&/g, '-and-')
  .replace(/[^\w\-]+/g, '')
  .replace(/\-\-+/g, '-')
