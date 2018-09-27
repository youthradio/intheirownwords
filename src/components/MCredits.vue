<template>
  <div id="credits">

    <div class="row my-3">
      <div class="col-12 col-md-4 my-auto">
        <hr>
      </div>
      <div class="col-12 col-md-4 text-center">
        <h2>About</h2>
      </div>
      <div class="col-12 col-md-4 my-auto">
        <hr>
      </div>
    </div>

    <div class="row my-3">
      <div 
        class="col-12 col-lg-8 offset-lg-2 col-md-10 offset-md-1" 
        v-html="getCredits" />
    </div>
    <div 
      class="row justify-content-center align-items-center mt-3 hand-over" 
      @click="scrollTop">
      <svg 
        width="30" 
        height="30" 
        class="octicon octicon-triangle-up" 
        fill="gray" 
        viewBox="0 0 12 16" 
        version="1.1" 
        aria-hidden="true"><path 
          fill-rule="evenodd" 
          d="M12 11L6 5l-6 6h12z" /></svg>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MCredits',
  props: {
    topic: {
      type: String,
      default: ''
    }
  },
  computed: {
    getCredits () {
      return this.$store.state.moreInfo.credits.Credits
    }
  },
  methods: {
    scrollTop () {
      window.scroll({
        top: this.$root.$el.querySelector('#menu'),
        behavior: 'smooth'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
