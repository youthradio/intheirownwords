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
      <div class="col-1 my-auto">
        <button v-on:click="prevTopic">Prev</button>
      </div>
      <div class="col-10">

        <div style="width:70%; margin:20px auto; height:400px">
          <slider class="slider-comp" ref="slider" :pages="sliderData" :sliderinit="sliderinit">
            <div slot="loading">
                Loding
            </div>
          </slider>
        </div>

      </div>
      <div class="col-1 my-auto">
        <button v-on:click="nextTopic">Next</button>
      </div>
    </div>

  </div>
</template>

<script>
import slider from 'vue-concise-slider'

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
      sliderData: [],
      sliderinit: {
        effect: 'coverflow',
        currentPage: 1,
        tracking: false,
        thresholdDistance: 100,
        thresholdTime: 300,
        deviation: 200,
        widthScalingRatio: 0.3,
        heightScalingRatio: 0.8,
        infinite: 4,
        slidesToScroll: 1,
        loop: true
      }
    }
  },
  computed: {
    selectedTopics () {
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
  watch: {
    selectedTopics () {
      this.sliderData = []
      this.selectedTopics.forEach((t, index) => {
        this.sliderData.push({
          html: `slide-${index}`,
          style: {
            'width': `${100 / (this.selectedTopics.length)}%`
          },
          component: {
            props: ['topic', 'sliderinit', 'pages'],
            data () {
              return {
                img: require(`../assets/images/${t.image}`)
              }
            },
            template: `
              <router-link :to="{ name: 'Conversation', params: { topic: '${t.slug}' }}">
               <div>
                <img :src="img" class="img-fluid">
               </div>
               <div class="my-auto">
                 <h4>
                   ${t.name}
                 </h4>
               </div>
              </router-link>
              `
          }
        })
      })
    }
  },
  methods: {
    nextTopic () {
      this.$refs.slider.$emit('slideNext')
    },
    prevTopic () {
      this.$refs.slider.$emit('slidePre')
    }
  },
  components: {
    slider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.slider-comp >>> .slider-pagination {
  display: none;
}
</style>
