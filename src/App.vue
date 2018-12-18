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
import ResizeObserver from 'resize-observer-polyfill';

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
  mounted() {
    const elementRoot = this.$el;
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { height } = entry.contentRect;
        const elementHeight = 'elementHeight:' + height;
        // console.log(elementHeight);
        parent.postMessage(elementHeight, '*');
      }
    });
    resizeObserver.observe(elementRoot);
  },
}
</script>

<style>
  @import url("https://yr.media/statics/yr-media-typography/yr-typography.css");
</style>
