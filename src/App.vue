<template>
  <div class="container-fluid">
    <router-view name="header" />
    <router-view name="profile" />
    <router-view name="section" />
    <router-view name="conversation" />
    <router-view name="topics" />
    <router-view name="footer" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      isLoading: false,
      appData: null,
      allTopics: null,
      allPeople: null
    }
  },
  computed: {
    isIframe () {
      if (this.$route.params.iframe) {
        return this.$route.params.iframe.toLowerCase() === 'iframe'
      }
    }
  },
  created () {
    this.isLoading = true
    this.$store.dispatch('fetchData') // fetch data on store vuex
    // this.$root.$emit('triggerScroll')
  },
  mounted () {
    const elementHeight = 'elementHeight:' + this.$root.$el.scrollHeight
    parent.postMessage(elementHeight, '*')
    window.addEventListener('resize', () => {
      const elementHeight = 'elementHeight:' + this.$root.$el.scrollHeight
      parent.postMessage(elementHeight, '*')
    })
  }
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,800");
</style>
