<template>
  <div id="credits">

      <div class="row my-3">
        <div class="col-12 col-md-4 my-auto">
          <hr>
        </div>
        <div class="col-12 col-md-4 text-center">
          <h2>Credits</h2>
        </div>
        <div class="col-12 col-md-4 my-auto">
          <hr>
        </div>
      </div>

      <div class="row my-3">
          <div class="col-12 col-lg-6 offset-lg-3 col-md-8 offset-md-2" v-html="getCredits">
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
