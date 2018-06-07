<template>
  <div id="topics">
    <div class="row text-center my-2">
      <div class="col-12 col-md-3 my-auto">
        <hr>
      </div>
      <div class="col-12 col-md-6 text-center">
        <h3>
          In Conversation About</h3>
      </div>
      <div class="col-12 col-md-3 my-auto">
        <hr>
      </div>
    </div>

    <div class="row text-center position-relative">
      <div class="col-12">
        <div class="d-md-none left-arrow hand-over" v-on:click="prevTopic">
          <svg width="32" height="32" class="octicon octicon-triangle-left" viewBox="0 0 6 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M6 2L0 8l6 6V2z"></path></svg>
        </div>
        <carousel ref="slider"
                  :per-page="1"
                  :paginationEnabled="false"
                  :loop="true"
                  :perPageCustom="[[768, 4]]">

          <slide class="hand-over" v-for="topic in selectedTopics" :key="`slide--${topic.slug}`" :data-name="`bt-slide-${topic.slug}`" @slideClick="handleSlideClick">
            <!-- <router-link :to="{ name: 'Conversation', params: { topic: topic.slug }}"> -->
            <div class="m-3 p-3">
               <div>
                <img :src="require(`../assets/images/${topic.image}`)" class="img-limit">
               </div>
               <div class="my-auto">
                 <h5>
                   {{topic.name}}
                 </h5>
               </div>
             </div>
            <!-- </router-link> -->
          </slide>
        </carousel>
        <div class="d-md-none right-arrow hand-over" v-on:click="nextTopic">
            <svg width="32" height="32" class="octicon octicon-triangle-right" viewBox="0 0 6 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M0 14l6-6-6-6v12z"></path></svg>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  props: {
    topic: {
      type: String
    },
    topics: {
      type: Object
    },
    person: {
      type: String,
      default: ''
    }
  },
  name: 'MTopics',
  data () {
    return {
    }
  },
  computed: {
    selectedTopics () {
      return Object.entries(this.$store.state.allTopics)
        .filter(topic => this.person ? topic[1].people.filter(p => p === this.person).length > 0 : true) // filter all topics by person or return al;
        .map(a => ({
          slug: a[0],
          name: a[1].topic,
          image: a[1].topicImg
        })) // return object with slug an topic
    }
  },
  methods: {
    nextTopic (event) {
      this.$refs.slider.advancePage()
    },
    prevTopic (event) {
      this.$refs.slider.advancePage('backward')
    },
    onPageChange (index) {
      if (this.$route.name === 'Home' || this.$route.name === 'PersonRoute') {
        return null
      }
      const slide = this.$refs.slider.$children[index].$el.dataset
      this.$router.push({
        name: 'Conversation',
        params: { topic: slide.name.split('bt-slide-')[1] },
        meta: { scrollTo: '#conversation' }
      }) // go to slide event page
    },
    handleSlideClick (slide) {
      this.$router.push({
        name: 'Conversation',
        params: { topic: slide.name.split('bt-slide-')[1] },
        meta: { scrollTo: '#conversation' }
      }) // go to slide event page
    }
  },
  components: {
    'carousel': Carousel,
    'slide': Slide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button {
  font-size: 0.8em;
}
.left-arrow {
  position: absolute;
  left: 2px;
  top: 50%;
  z-index: 1000;
}
.right-arrow {
  position: absolute;
  right: 2px;
  top: 50%;
  z-index: 1000;
}

</style>
