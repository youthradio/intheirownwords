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
          <div class="col-12 col-lg-8 offset-lg-2 col-md-10 offset-md-1" v-html="getCredits">
          </div>
      </div>

  </div>
</template>

<script>
export default {
  props: {
    topic: {
      type: String,
      default: ''
    }
  },
  name: 'MCredits',
  computed: {
    getCredits () {
      return this.$store.state.moreInfo.credits.Credits
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
