''<template>
  <header>
    <div 
      v-if="isHome" 
      class="splash-header">
      <div class="d-flex justify-content-center justify-content-sm-start bd-highlight p-2">
        <div class="youthradio-w" />
      </div>
      <div class="row h-100 justify-content-center no-margin">
        <div class="col-10 col-md-6 col-lg-5 mx-auto my-auto">
          <router-link :to="{ name: 'Home', params: {}}">
            <a>
              <div class="d-flex justify-content-center align-items-center">
                <div class="mr-4">
                  <img 
                    :src="require('../assets/images/NB_symbol.svg')" 
                    class="img-splash">
                </div>
                <div class="">
                  <h1>
                    <span>in</span>
                    <span class="w">their</span>
                    <span>own</span>
                    <span>words</span>
                  </h1>
                </div>
              </div>
            </a>
          </router-link>
          <div class="d-flex justify-content-center flex-wrap">
            <div class="mt-4">
              <p>
                In Their Own Words is an exploration of non-binary gender identity created by non-binary teens and young adults.
              </p>
            </div>
            <div 
              class="mt-4 hand-over" 
              @click="scrollTo">
              <svg 
                width="30" 
                height="30" 
                class="octicon octicon-triangle-down" 
                fill="white" 
                viewBox="0 0 12 16" 
                version="1.1" 
                aria-hidden="true"><path 
                  fill-rule="evenodd" 
                  d="M0 5l6 6 6-6H0z" /></svg>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div 
      id="menu" 
      class="no-margin">
      <div class="row my-2">
        <div :class="['col-2', !isIframe ? 'col-lg-4  my-auto' : 'col-lg-2']">
          <router-link 
            v-if="!isIframe" 
            :to="{ name: 'Home', params: {}}">
            <div class="youthradio-simple d-lg-none" />
            <div 
              class="youthradio d-none d-lg-flex" 
              style="fill:black" />
          </router-link>
          <a 
            v-else
            href="https://yri.youthradio.org/intheirownwords/"
            target="_blank">
            <div class="youthradio-simple d-lg-none" />
            <div 
              class="youthradio d-none d-lg-flex" 
              style="fill:black" />
          </a>
        </div>
        <div :class="['col-8 my-auto', !isIframe ? 'col-lg-4' : 'col-lg-8', 'text-center title-link']">
          <h1>
            <router-link 
              v-if="!isIframe" 
              :to="{ name: 'Home', params: {}} ">
              <a>
                in <span class="g">their</span> own words
              </a>
            </router-link>
            <a 
              v-else
              href="https://yri.youthradio.org/intheirownwords"
              target="_blank"> in <span class="g">their</span> own words</a>
          </h1>
          <p v-if="isIframe">
            In <span class="g">Their</span> Own Words is an exploration of non-binary gender identity created by non-binary teens and young adults.
          </p>
        </div>
        <div 
          id="menu-items" 
          :class="['col-2 my-auto text-right', !isIframe ? 'col-lg-4' : 'col-lg-2']">
          <div 
            v-if="!isIframe" 
            id="menu-btn" 
            class="d-lg-none">
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 448 512" 
              class="bt-open">
              <path 
                fill="gray" 
                d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z" />
            </svg>
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 320 512" 
              class="bt-closed d-none">
              <path 
                fill="gray" 
                d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" />
            </svg>
          </div>
          <div 
            v-if="!isIframe" 
            class="row d-none d-lg-flex">
            <div class="col-12 ml-auto">
              <div class="row text-right">
                <div class="col-6 my-auto">
                  <router-link :to="{ name: 'MoreCoverage' }">
                    <a @click="menuItemClicked">More Coverage</a>
                  </router-link>
                </div>
                <div class="col-3 my-auto">
                  <router-link :to="{ name: 'Credits' }">
                    <a @click="menuItemClicked">About</a>
                  </router-link>
                </div>
                <div class="col-3 my-auto">

                  <div class="d-flex justify-content-end">
                    <div class="p-1">
                      <a 
                        class="hand-over" 
                        title="Share on Twitter" 
                        @click="tweetMessage()">
                        <div class="twitter" />
                      </a>
                    </div>
                    <div class="p-1 ">
                      <a 
                        class="hand-over" 
                        title="Share on Facebook" 
                        @click="facebookThis()">
                        <div class="facebook" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        v-if="!isIframe" 
        id="menu-mobile" 
        class="row d-lg-none text-center menu collapse">
        <div class="col-12 flex-wrap">
          <router-link :to="{ name: 'Home', params: {}}">
            <h6>Home</h6>
          </router-link>
          <hr>
          <router-link 
            v-for="person in getPeople"
            :key="person.name"
            :to="{ name: 'PersonRoute', params: { person: person.param }}">
            <h6>{{ person.name }}</h6>
          </router-link>
          <hr>
          <router-link 
            v-for="topic in getTopics"
            :key="topic.name"
            :to="{ name: 'Conversation', params: { topic: topic.param }}">
            <h6>{{ topic.name }}</h6>
          </router-link>
          <hr>
          <router-link :to="{ name: 'MoreCoverage' }">
            <a @click="menuItemClicked">
              <h6>More Coverage</h6>
            </a>
          </router-link>
          <router-link :to="{ name: 'Credits' }">
            <a @click="menuItemClicked">
              <h6>About</h6>
            </a>
          </router-link>
          <div class="d-flex justify-content-center">
            <div class="p-1">
              <a 
                class="hand-over" 
                title="Share on Twitter" 
                @click="tweetMessage()">
                <div class="twitter" />
              </a>
            </div>
            <div class="p-1 ">
              <a 
                class="hand-over" 
                title="Share on Facebook" 
                @click="facebookThis()">
                <div class="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    isHome () {
      return this.$route.name === 'Home'
    },
    isIframe () {
      if (this.$route.params.iframe) {
        return this.$route.params.iframe.toLowerCase() === 'iframe'
      }
    },
    getPeople () {
      return Object.keys(this.$store.state.allPeople).map(e => ({
        name: e,
        param: e
      }))
    },
    getTopics () {
      return Object.entries(this.$store.state.allTopics).map(p => ({
        name: p[1].topic,
        param: p[0]
      }))
    }
  },
  watch: {
    '$route' () {
      const el = this.$el.querySelector('#menu-mobile')
      if (!el.classList.contains('collapse')) {
        el.classList.add('collapse')
        this.$el.querySelector('.bt-open').classList.remove('d-none')
        this.$el.querySelector('.bt-closed').classList.add('d-none')
      }
    }
  },
  mounted () {
    if (!this.isIframe) {
      this.$el.querySelector('#menu-btn').addEventListener('click', () => {
        const el = this.$el.querySelector('#menu-mobile')
        if (el.classList.contains('collapse')) {
          el.classList.remove('collapse')
          this.$el.querySelector('.bt-open').classList.add('d-none')
          this.$el.querySelector('.bt-closed').classList.remove('d-none')
        } else {
          el.classList.add('collapse')
          this.$el.querySelector('.bt-open').classList.remove('d-none')
          this.$el.querySelector('.bt-closed').classList.add('d-none')
        }
      })
    }
    if (this.isHome) {
      const colors = [
        ['#f5a623', '#4a90e2'],
        ['#BD10e0', '#3dc4a6']]
      const gradientEl = this.$el.querySelector('.splash-header')
      const rand = Math.floor(Math.random() * 2)
      gradientEl.style.backgroundImage = `linear-gradient(45deg, ${colors[rand][0]}, ${colors[rand][1]})`
    }
  },
  methods: {
    menuItemClicked () {
      this.$el.querySelector('#menu-btn').click()
    },
    scrollTo () {
      window.scroll({
        top: this.$el.querySelector('.splash-header').offsetHeight,
        behavior: 'smooth'
      })
    },
    tweetMessage () {
      const url = 'https://yri.youthradio.org/intheirownwords'
      const tweet = `4 #nonbinary young adults @youthradio talk about their experiences with gender #InTheirOwnWords: ${url}`
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`
      window.open(tweetUrl, 'pop', 'width=600, height=400, scrollbars=no')
    },
    facebookThis () {
      const url = 'https://yri.youthradio.org/intheirownwords'
      const title = 'In Their Own Words'
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`
      window.open(facebookUrl, '_blank')
    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* @media (max-width: 576px) { */
.splash-header {
    height: 100vh;
    /* overflow: hidden; */
    background: -webkit-linear-gradient(45deg, #f5a623, #BD10e0);
    background: -moz-linear-gradient(45deg, #f5a623, #BD10e0);
    background: -o-linear-gradient(45deg, #f5a623, #BD10e0);
    background: linear-gradient(45deg, #f5a623, #BD10e0);

    background-size: 150% 300%;
    -webkit-animation: Pattern 4s ease infinite;
    -moz-animation: Pattern 4s ease infinite;
    -o-animation: Pattern 4s ease infinite;
    animation: Pattern 4s ease infinite;

    padding: 0;
    margin-right: -15px;
    margin-left: -15px;
}

.no-margin {
  margin-right: 0px;
  margin-left: 0px;
}
h3, h3 a {
  color: white;
}
h1 {
  color: #333345;
}
a:hover {
  text-decoration: none;
}
h1 .w {
  color: white;
}
p .b {
  color: #333345;
}
h1 .b {
  color: #333345;
}
.splash-header h1 span {
  display: block;
}
p {
  color: white;
}
#menu p {
  color: gray;
}
@keyframes Pattern {
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 100% 0%
  }
  50% {
    background-position: 100% 100%
  }
  75% {
    background-position: 0% 100%
  }
  100% {
    background-position: 0% 0%
  }
}
.title-splash {
  bottom: 0;
}
@media screen and (min-width: 576px) {
  h1, h1 a {
     font-size: 40px;
  }
  h3 {
     font-size: 25px;
  }
  p {
    font-size: 22px;
  }
  .img-splash {
    max-width: 140px;
    min-width: 100px;

    width: 100%;
  }
}
@media screen and (max-width: 576px) {
  h1, h1 a {
     font-size: 25px;
  }
  h3 {
     font-size: 20px;
  }
  p {
    font-size: 16px;
  }
  .img-splash {
    max-width: 90px;
    min-width: 50px;

    width: 100%;
  }
}

.title-link a{
  color: #333345;
}
.title-link a .g {
  color: gray;
}
.title-link a:hover {
  color: gray;
}
.title-link a:hover .g {
  color: #333345;
}

a {
  color: gray;
}
#menu-items a {
  font-size: 0.9em;
}
.menu hr{
  border: 0;
  height: 1px;
  background: #3ec0b3;
  background-image: linear-gradient(to right, #fff, #3ec0b3, #fff);
}
.facebook {
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg class='float-right mr-1' fill='rgb%280,235,171%29' width='20' height='20' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 58 58'%3E%3Cpath class='cls-1' d='M53.85,0H3.15A3.15,3.15,0,0,0,0,3.15v50.7A3.15,3.15,0,0,0,3.15,57h27.3V35H23V26.33h7.41V20c0-7.37,4.49-11.38,11.06-11.38A62.15,62.15,0,0,1,48.15,9v7.69H43.61c-3.57,0-4.26,1.69-4.26,4.18v5.5H47.9L46.79,35H39.35V57h14.5A3.15,3.15,0,0,0,57,53.85V3.15A3.15,3.15,0,0,0,53.85,0Z'/%3E%3C/svg%3E");
}
.twitter {
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg class='float-right' fill='rgb%280,235,171%29' width='20' height='20' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='White' x='0px' y='0px' viewBox='0 0 400 400' style='enable-background:new 0 0 400 400;' xml:space='preserve'%3E%3Cpath class='st0' d='M400,400H0V0h400V400z M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6 c10-7.2,18.7-16.3,25.6-26.6c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4 c-9.4-10-22.7-16.2-37.4-16.2c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6 c-4.4,7.6-6.9,16.4-6.9,25.8c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3 c-4.3,1.2-8.8,1.8-13.5,1.8c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22 c-4.1,0-8.2-0.2-12.2-0.7C97.7,293.1,124.7,301.6,153.6,301.6'/%3E%3C/svg%3E");
}
.youthradio-simple {
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('../assets/images/yrlogosimple_fall.png');
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgb%280,235,171%29' viewBox='0 0 40 40'%3E%3Cpath class='cls-1' d='M37.17,0h-1.7A2.8,2.8,0,0,0,33,1.5c-.1.16-.2.46-.31.61a2.24,2.24,0,0,1-1.84.74,1.84,1.84,0,0,1-1.88-1.12A2.84,2.84,0,0,0,26.34,0h-1.7A2.83,2.83,0,0,0,21.8,2.84v6a2,2,0,0,1-1.67,1.84H20c-.89-.08-1.52-1.15-1.64-2.13l0-.08A2.84,2.84,0,0,0,15.57,6H13.86A2.83,2.83,0,0,0,11,8.82V20.3c-.07,1.07-.86,2.18-1.83,2.18s-1.83-1.2-1.83-2.3V8.83A2.83,2.83,0,0,0,4.54,6H2.83A2.83,2.83,0,0,0,0,8.83V23.6a2.83,2.83,0,0,0,2.83,2.82h1.7a2.84,2.84,0,0,0,2.56-1.6,2.59,2.59,0,0,1,.28-.55,1.86,1.86,0,0,1,1-.61,3.47,3.47,0,0,1,.78-.1A2,2,0,0,1,11,25.1V38.31c0,3.28,7.38,1.92,7.38-5.27V13.64a2,2,0,0,1,1.64-2h.09a2,2,0,0,1,1.67,2v5.78a2.83,2.83,0,0,0,2.83,2.82h1.71a2.83,2.83,0,0,0,2.83-2.82V6.11c0-1.38.66-2.18,1.63-2.18s1.8,1.16,1.83,2.24v4.24c0,1.56,1.36,1.69,2.82,1.69a4.1,4.1,0,0,0,3.18-1.53A5.12,5.12,0,0,0,40,6.72V2.82A2.83,2.83,0,0,0,37.17,0'/%3E%3C/svg%3E%0A");

}
.youthradio {
  height: 50px;
  width: 110px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('../assets/images/yrlogo_fall.png');
  background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' fill='rgb%280,235,171%29' viewBox='0 0 489.59 375.03'%3E%3Cg id='media'%3E%3Cpath class='cls-1' d='M395.54,394.81h15.17a1.91,1.91,0,0,1,2.15,2.16v61.57a1.9,1.9,0,0,1-2.15,2.15h-8.4a1.9,1.9,0,0,1-2.15-2.15V410h-.41L389.29,444.3a2.51,2.51,0,0,1-2.56,2h-8.6a2.51,2.51,0,0,1-2.56-2l-10.66-34.43h-.41v48.67a2.56,2.56,0,0,1-.41,1.69,2.34,2.34,0,0,1-1.74.46H354a1.9,1.9,0,0,1-2.15-2.15V397a1.9,1.9,0,0,1,2.15-2.16h15.27a1.94,1.94,0,0,1,1.94,1.44L382,432.41h.62l11-36.16a1.74,1.74,0,0,1,1.94-1.44' transform='translate(-140.3 -135.06)'/%3E%3Cpath class='cls-1' d='M467.46,460.69H434a1.9,1.9,0,0,1-2.15-2.15V397a1.9,1.9,0,0,1,2.15-2.14h33.5c1.37,0,2.05.71,2.05,2.14v7c0,1.44-.68,2.15-2.05,2.15H446.05c-.82,0-1.23.38-1.23,1.13v13.32c0,.75.41,1.12,1.23,1.12h17.52a1.9,1.9,0,0,1,2.15,2.16v7a1.9,1.9,0,0,1-2.15,2.16H446.05c-.82,0-1.23.37-1.23,1.12v14.24c0,.75.41,1.13,1.23,1.13h21.41c1.37,0,2.05.72,2.05,2.15v7c0,1.43-.68,2.15-2.05,2.15' transform='translate(-140.3 -135.06)'/%3E%3Cpath class='cls-1' d='M500.65,449.42h11.17q3.29,0,4.66-1.38c.93-.93,1.39-2.48,1.39-4.67V412.13c0-2.19-.46-3.74-1.39-4.67s-2.47-1.38-4.66-1.38H500.65a1,1,0,0,0-1.12,1.13v41.08a1,1,0,0,0,1.12,1.13m-14.13,9.12V397a1.9,1.9,0,0,1,2.15-2.16H514q8,0,12.45,4.36t4.46,12.34V444q0,8-4.46,12.34T514,460.69h-25.3a1.9,1.9,0,0,1-2.15-2.15' transform='translate(-140.3 -135.06)'/%3E%3Cpath class='cls-1' d='M562.33,397v61.58a1.9,1.9,0,0,1-2.15,2.15h-8.71a1.9,1.9,0,0,1-2.15-2.15V397a1.9,1.9,0,0,1,2.15-2.15h8.71a1.9,1.9,0,0,1,2.15,2.15' transform='translate(-140.3 -135.06)'/%3E%3Cpath class='cls-1' d='M603.51,407.21l-7.37,29.61H611.3l-7.38-29.61Zm-14.85,53.48h-9.84c-1.23,0-1.64-.72-1.23-2.15L593.78,397a2.93,2.93,0,0,1,3.07-2.14h13.63c1.7,0,2.73.71,3.07,2.14l16.19,61.58c.41,1.43,0,2.15-1.23,2.15h-9.84a2,2,0,0,1-1.53-.46,3.47,3.47,0,0,1-.62-1.69l-2.86-11.27h-20l-2.87,11.27a3.16,3.16,0,0,1-.67,1.69,2.06,2.06,0,0,1-1.48.46' transform='translate(-140.3 -135.06)'/%3E%3C/g%3E%3Cg id='yr-logo'%3E%3Cpath class='cls-1' d='M486.94,135.06H471a26.4,26.4,0,0,0-23.26,14c-.83,1.54-1.77,4.32-2.86,5.77-3,3.92-8.72,6.91-17.11,6.91-9.69,0-15.37-4.77-17.56-10.54v0a26.45,26.45,0,0,0-24.18-15.9H370.13a26.44,26.44,0,0,0-26.37,26.36v56.18c-1.25,8.82-7.92,17.49-15.91,17.49a8.89,8.89,0,0,1-.89-.07c-8.46-.67-15.25-10.93-15.25-20.32v3.1a26.44,26.44,0,0,0-26.36-26.37H269.42a26.44,26.44,0,0,0-26.36,26.37v100.6H243v7c-.54,9.94-8,20.39-17,20.39-9.38,0-17.05-11.27-17.05-21.53V218.09a26.44,26.44,0,0,0-26.36-26.37H166.67a26.44,26.44,0,0,0-26.37,26.37V356.53a26.44,26.44,0,0,0,26.37,26.36h15.92a26.2,26.2,0,0,0,12.2-3,26.71,26.71,0,0,0,9.23-8.06,25.81,25.81,0,0,0,2.34-3.95c.84-1.76,1.28-3.56,2.59-5.07a17.37,17.37,0,0,1,4-3.42A20.83,20.83,0,0,1,218.6,357a29.75,29.75,0,0,1,7.22-.84c9.69,0,17.12,5.44,17.12,10.52,0,1.16.12,127.58.12,127.58,0,30.67,68.65,18,68.65-49.4V263.17h.22c1.2-8.68,7.43-17.93,15-18.6h0c.3,0,.59-.07.89-.07,8,0,14.66,9.65,15.91,18.67v4.31h0V316.7h0v0a26.45,26.45,0,0,0,26.37,26.37h15.92a26.45,26.45,0,0,0,26.37-26.37V192.27c0-12.94,6.16-20.39,15.18-20.39,9.22,0,16.77,10.89,17,21,0,7.75.05,39.71.05,39.71,0,14.61,12.62,15.78,26.25,15.78a38.11,38.11,0,0,0,29.59-14.29c7.25-8.89,12.79-16.45,12.79-36.1V161.43a26.45,26.45,0,0,0-26.37-26.37' transform='translate(-140.3 -135.06)'/%3E%3C/g%3E%3C/svg%3E%0A");
}
.youthradio-w {
  height: 50px;
  width: 110px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('../assets/images/yrlogo_fall.png');
  background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' fill='rgb%28255,255,255%29' viewBox='0 0 489.59 375.03'%3E%3Cg id='media'%3E%3Cpath class='cls-1' d='M395.54,394.81h15.17a1.91,1.91,0,0,1,2.15,2.16v61.57a1.9,1.9,0,0,1-2.15,2.15h-8.4a1.9,1.9,0,0,1-2.15-2.15V410h-.41L389.29,444.3a2.51,2.51,0,0,1-2.56,2h-8.6a2.51,2.51,0,0,1-2.56-2l-10.66-34.43h-.41v48.67a2.56,2.56,0,0,1-.41,1.69,2.34,2.34,0,0,1-1.74.46H354a1.9,1.9,0,0,1-2.15-2.15V397a1.9,1.9,0,0,1,2.15-2.16h15.27a1.94,1.94,0,0,1,1.94,1.44L382,432.41h.62l11-36.16a1.74,1.74,0,0,1,1.94-1.44' transform='translate(-140.3 -135.06)'/%3E%3Cpath class='cls-1' d='M467.46,460.69H434a1.9,1.9,0,0,1-2.15-2.15V397a1.9,1.9,0,0,1,2.15-2.14h33.5c1.37,0,2.05.71,2.05,2.14v7c0,1.44-.68,2.15-2.05,2.15H446.05c-.82,0-1.23.38-1.23,1.13v13.32c0,.75.41,1.12,1.23,1.12h17.52a1.9,1.9,0,0,1,2.15,2.16v7a1.9,1.9,0,0,1-2.15,2.16H446.05c-.82,0-1.23.37-1.23,1.12v14.24c0,.75.41,1.13,1.23,1.13h21.41c1.37,0,2.05.72,2.05,2.15v7c0,1.43-.68,2.15-2.05,2.15' transform='translate(-140.3 -135.06)'/%3E%3Cpath class='cls-1' d='M500.65,449.42h11.17q3.29,0,4.66-1.38c.93-.93,1.39-2.48,1.39-4.67V412.13c0-2.19-.46-3.74-1.39-4.67s-2.47-1.38-4.66-1.38H500.65a1,1,0,0,0-1.12,1.13v41.08a1,1,0,0,0,1.12,1.13m-14.13,9.12V397a1.9,1.9,0,0,1,2.15-2.16H514q8,0,12.45,4.36t4.46,12.34V444q0,8-4.46,12.34T514,460.69h-25.3a1.9,1.9,0,0,1-2.15-2.15' transform='translate(-140.3 -135.06)'/%3E%3Cpath class='cls-1' d='M562.33,397v61.58a1.9,1.9,0,0,1-2.15,2.15h-8.71a1.9,1.9,0,0,1-2.15-2.15V397a1.9,1.9,0,0,1,2.15-2.15h8.71a1.9,1.9,0,0,1,2.15,2.15' transform='translate(-140.3 -135.06)'/%3E%3Cpath class='cls-1' d='M603.51,407.21l-7.37,29.61H611.3l-7.38-29.61Zm-14.85,53.48h-9.84c-1.23,0-1.64-.72-1.23-2.15L593.78,397a2.93,2.93,0,0,1,3.07-2.14h13.63c1.7,0,2.73.71,3.07,2.14l16.19,61.58c.41,1.43,0,2.15-1.23,2.15h-9.84a2,2,0,0,1-1.53-.46,3.47,3.47,0,0,1-.62-1.69l-2.86-11.27h-20l-2.87,11.27a3.16,3.16,0,0,1-.67,1.69,2.06,2.06,0,0,1-1.48.46' transform='translate(-140.3 -135.06)'/%3E%3C/g%3E%3Cg id='yr-logo'%3E%3Cpath class='cls-1' d='M486.94,135.06H471a26.4,26.4,0,0,0-23.26,14c-.83,1.54-1.77,4.32-2.86,5.77-3,3.92-8.72,6.91-17.11,6.91-9.69,0-15.37-4.77-17.56-10.54v0a26.45,26.45,0,0,0-24.18-15.9H370.13a26.44,26.44,0,0,0-26.37,26.36v56.18c-1.25,8.82-7.92,17.49-15.91,17.49a8.89,8.89,0,0,1-.89-.07c-8.46-.67-15.25-10.93-15.25-20.32v3.1a26.44,26.44,0,0,0-26.36-26.37H269.42a26.44,26.44,0,0,0-26.36,26.37v100.6H243v7c-.54,9.94-8,20.39-17,20.39-9.38,0-17.05-11.27-17.05-21.53V218.09a26.44,26.44,0,0,0-26.36-26.37H166.67a26.44,26.44,0,0,0-26.37,26.37V356.53a26.44,26.44,0,0,0,26.37,26.36h15.92a26.2,26.2,0,0,0,12.2-3,26.71,26.71,0,0,0,9.23-8.06,25.81,25.81,0,0,0,2.34-3.95c.84-1.76,1.28-3.56,2.59-5.07a17.37,17.37,0,0,1,4-3.42A20.83,20.83,0,0,1,218.6,357a29.75,29.75,0,0,1,7.22-.84c9.69,0,17.12,5.44,17.12,10.52,0,1.16.12,127.58.12,127.58,0,30.67,68.65,18,68.65-49.4V263.17h.22c1.2-8.68,7.43-17.93,15-18.6h0c.3,0,.59-.07.89-.07,8,0,14.66,9.65,15.91,18.67v4.31h0V316.7h0v0a26.45,26.45,0,0,0,26.37,26.37h15.92a26.45,26.45,0,0,0,26.37-26.37V192.27c0-12.94,6.16-20.39,15.18-20.39,9.22,0,16.77,10.89,17,21,0,7.75.05,39.71.05,39.71,0,14.61,12.62,15.78,26.25,15.78a38.11,38.11,0,0,0,29.59-14.29c7.25-8.89,12.79-16.45,12.79-36.1V161.43a26.45,26.45,0,0,0-26.37-26.37' transform='translate(-140.3 -135.06)'/%3E%3C/g%3E%3C/svg%3E%0A");
}

</style>
