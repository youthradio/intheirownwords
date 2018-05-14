<template>
  <div id="topics">
    <div class="row text-center my-5">
      <div class="col-12 col-md-4 my-auto">
        <hr>
      </div>
      <div class="col-12 col-md-4 text-center">
        <h2>
          In Conversation About</h2>
      </div>
      <div class="col-12 col-md-4 my-auto">
        <hr>
      </div>
    </div>

    <div class="row text-center">
      <div class="d-md-none col-1 my-auto">
        <button v-on:click="prevTopic">Prev</button>
      </div>
      <div class="col-md-12 col-10">
        <carousel ref="slider"
                  :per-page="1"
                  :paginationEnabled="false"
                  :loop="true"
                  :perPageCustom="[[768, 4]]"
                  @pageChange="onPageChange">

          <slide v-for="topic in selectedTopics" :key="`slide--${topic.slug}`" :data-name="`bt-slide-${topic.slug}`" @slideClick="handleSlideClick">
            <!-- <router-link :to="{ name: 'Conversation', params: { topic: topic.slug }}"> -->
            <div class="px-2">
               <div>
                <img :src="require(`../assets/images/${topic.image}`)" class="img-fluid">
               </div>
               <div class="my-auto">
                 <h4>
                   {{topic.name}}
                 </h4>
               </div>
             </div>
            <!-- </router-link> -->
          </slide>
        </carousel>

      </div>
      <div class="d-md-none col-1 my-auto">
        <button v-on:click="nextTopic">Next</button>
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
      const slide = this.$refs.slider.$children[index].$el.dataset
      this.$router.push({
        name: 'Conversation',
        params: { topic: slide.name.split('bt-slide-')[1]
        }}) // go to slide event page
    },
    handleSlideClick (slide) {
      this.$router.push({
        name: 'Conversation',
        params: { topic: slide.name.split('bt-slide-')[1]
        }}) // go to slide event page
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

</style>
