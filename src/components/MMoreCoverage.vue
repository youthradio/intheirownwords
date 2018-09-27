<template>
  <div id="more-coverage">

    <div class="row my-3">
      <div class="col-12 col-md-3 my-auto">
        <hr>
      </div>
      <div class="col-12 col-md-6 text-center">
        <h2>More Coverage</h2>
      </div>
      <div class="col-12 col-md-3 my-auto">
        <hr>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-12 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
        <p>
          outLoud Radio is a program of Youth Radio that works to amplify the voices of LGBTQ+ young people. Below we've gathered a few of our favorite pieces from over the years, or you could check out our full archive here. </p>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-10 offset-1">
        <div class="row">
          <div 
            v-for="(item, index) in getMore" 
            :key="index" 
            class="col-sm-6 col-md-4 mt-2">
            <div 
              class="card hand-over" 
              @click="link(item.article_url)">
              <img 
                :src="require('../assets/images/' + item.image)"
                class="card-img-top" 
                alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p 
                  class="card-text" 
                  v-html="item.text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1 text-center">
        <p>
          Get the latest stories from Youth Radio on gender, sexuality, and more:
        </p>
      </div>
      <div class="col-10 offset-1">
        <form 
          id="mc-embedded-subscribe-form" 
          action="https://youthradio.us4.list-manage.com/subscribe/post?u=962a6c84da5c12bc5b3486086&amp;id=77a1c5e71a" 
          method="post" 
          name="mc-embedded-subscribe-form" 
          class="validate" 
          target="_blank" 
          novalidate>
          <div class="d-flex flex-wrap align-items-center align-self-center justify-content-center">
            <input 
              type="email" 
              value="" 
              name="EMAIL" 
              class="email my-1 mx-1" 
              placeholder="Subscribe to Youth Radio" 
              required>
            <input 
              type="submit" 
              value="Subscribe" 
              name="subscribe" 
              class="button btn btn-sm btn-outline-custom my-1 mx-1">
          </div>
        </form>
      </div>
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
  name: 'MMoreCoverage',
  props: {
    topic: {
      type: String,
      default: ''
    }
  },
  computed: {
    getMore () {
      return this.$store.state.moreInfo.coverage
    }
  },
  methods: {
    link (url) {
      window.open(url, '_blank')
    },
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
