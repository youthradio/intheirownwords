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
      <div class="col-1">
        <button class="d-md-none" v-on:click="prevTopic">Prev</button>
      </div>
      <div class="col-10">
        <div class="slider-parent">
          <tiny-slider  ref="tslider"
                        :autoHeight="true"
                        :controls="false"
                        :mouse-drag="true"
                        :loop="false"
                        items="1"
                        gutter="20"
                        :responsive="{
                          576: {
                            items: 2
                          },
                          768: {
                            items: 4
                          }
                        }"
                        v-if="selectTopics">

              <div v-for="topic in selectTopics" :key="`item-${topic.slug}`">
                <router-link :to="{ name: 'Conversation', params: { topic: topic.slug }}">
                  <img :src="require('../assets/images/' + topic.image)" class="img-fluid">
                  </router-link>
                <h4>
                  <router-link :to="{ name: 'Conversation', params: { topic: topic.slug }}">
                    {{ topic.name }}
                  </router-link>
                </h4>
              </div>
          </tiny-slider>
        </div>
      </div>
      <div class="col-1">
        <button class="d-md-none" v-on:click="nextTopic">Next</button>
      </div>
    </div>

  </div>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider'

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
      msg: 'd'
    }
  },
  mounted () {
    // this.$refs.tslider.slider.events.on('transitionEnd', this.transitionEnd)
  },
  computed: {
    selectTopics () {
      if (this.topics) {
        return Object.entries(this.topics)
          .filter(topic => this.person ? topic[1].people.filter(p => p === this.person).length > 0 : true) // filter all topics by person or return al;
          .map(a => ({
            slug: a[0],
            name: a[1].topic,
            image: a[1].topicImg
          })) // return object with slug an topic
      } else {
        return null
      }
    }
  },
  methods: {
    nextTopic () {
      this.$refs.tslider.goTo('next')
    },
    prevTopic () {
      this.$refs.tslider.goTo('prev')
    },
    transitionEnd (event) {
      console.log(event)
    }
  },
  components: {
    'tiny-slider': VueTinySlider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'node_modules/tiny-slider/src/tiny-slider';

.slider-parent{
  overflow: hidden;
}

</style>
