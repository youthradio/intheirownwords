<template>
  <div class="container-fluid">
    <router-view name="header" />
    <router-view name="profile" />
    <router-view name="section" />
    <router-view
      v-if="isIframe"
      name="topics" />
    <router-view name="conversation" />
    <router-view
      v-if="!isIframe"
      name="topics" />
    <router-view
      v-if="!isIframe"
      name="footer" />
  </div>
</template>

<script>
import CommonUtils from './mixins/CommonUtils'

export default {
  name: 'App',
  mixins: [
    CommonUtils,
  ],
  data () {
    return {
      isLoading: false,
      appData: null,
      allTopics: null,
      allPeople: null
    }
  },
  created () {
    this.isLoading = true
    this.$store.dispatch('fetchData') // fetch data on store vuex
    let isIframe = false
    if (this.$route.params.iframe) {
      isIframe = this.$route.params.iframe.toLowerCase() === 'iframe'
    }
    this.$store.dispatch({
      type: 'setIframe',
      isIframe,
    }) // fetch data on store vuex

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
  @import url("https://yri.youthradio.org/yr-typography/yr-typography.css");
</style>
