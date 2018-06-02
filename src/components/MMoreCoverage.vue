<template>
  <div id="more-coverage">

      <div class="row my-3">
        <div class="col-12 col-md-4 my-auto">
          <hr>
        </div>
        <div class="col-12 col-md-4 text-center">
          <h2>More Coverage</h2>
        </div>
        <div class="col-12 col-md-4 my-auto">
          <hr>
        </div>
      </div>

      <div class="row my-3">
          <div class="col-10 offset-1">
            <div class="row">
              <div class="col-sm-6 col-md-4 mt-2" v-for="(item, index) in getMore" :key="index">
                <div v-on:click="link(item.article_url)" class="card hand-over">
                  <img class="card-img-top" :src="item.image" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">{{item.title}}</h5>
                    <p class="card-text" v-html="item.text"></p>
                  </div>
                </div>
              </div>
            </div>
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
  name: 'MMoreCoverage',
  computed: {
    getMore () {
      return this.$store.state.moreInfo.coverage
    }
  },
  methods: {
    link (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
