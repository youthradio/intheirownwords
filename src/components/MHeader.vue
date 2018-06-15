''<template>
  <header>
    <div v-if="isHome" class="splash-header">
        <div class="d-flex justify-content-center justify-content-sm-start bd-highlight p-2">
          <div class="youthradio-w"></div>
      </div>
      <div class="row h-100 justify-content-center no-margin">
        <div class="col-10 col-md-6 col-lg-5 mx-auto my-auto">
          <router-link :to="{ name: 'Home', params: {}}">
            <a>
              <div class="d-flex justify-content-center align-items-center">
                    <div class="mr-4">
                      <img class="img-splash" :src="require('../assets/images/NB_symbol.svg')">
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
            <div v-on:click="scrollTo" class="mt-4 hand-over">
              <svg width="30" height="30" class="octicon octicon-triangle-down" fill="white" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path></svg>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div id="menu" class="no-margin">
      <div class="row my-2">
        <div :class="['col-2', !isIframe ? 'col-lg-4  my-auto' : 'col-lg-2']">
          <router-link v-if="!isIframe" :to="{ name: 'Home', params: {}}">
              <div class="youthradio-simple d-lg-none"></div>
              <div class="youthradio d-none d-lg-flex" style="fill:black"></div>
          </router-link>
          <a v-else
          href="https://yri.youthradio.org/intheirownwords/"
          target="_blank">
            <div class="youthradio-simple d-lg-none"></div>
            <div class="youthradio d-none d-lg-flex" style="fill:black"></div>
          </a>
        </div>
        <div :class="['col-8 my-auto', !isIframe ? 'col-lg-4' : 'col-lg-8', 'text-center']">
          <h1>
            <router-link v-if="!isIframe" :to="{ name: 'Home', params: {}} ">
              <a class="b">
                in <span class="g">their</span> own words
              </a>
            </router-link>
            <a v-else
            href="https://yri.youthradio.org/intheirownwords"
            target="_blank" class="b"> in <span class="g">their</span> own words</a>
          </h1>
          <p v-if="isIframe">
            In <span class="g">Their</span> Own Words is an exploration of non-binary gender identity created by non-binary teens and young adults.
          </p>
        </div>
        <div id="menu-items" :class="['col-2 my-auto text-right', !isIframe ? 'col-lg-4' : 'col-lg-2']">
          <div v-if="!isIframe" class="d-lg-none" id="menu-btn">
            <svg width="30" height="30" viewBox="0 0 448 512" class="bt-open">
              <path fill="gray" d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z">
            </path>
            </svg>
            <svg width="30" height="30" viewBox="0 0 320 512" class="bt-closed d-none">
              <path fill="gray" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z">
              </path>
            </svg>
          </div>
          <div v-if="!isIframe" class="row d-none d-lg-flex">
            <div class="col-12 ml-auto">
              <div class="row text-right">
                <div class="col-6 my-auto">
                    <router-link :to="{ name: 'MoreCoverage' }">
                      <a v-on:click="menuItemClicked">More Coverage</a>
                    </router-link>
                </div>
                <div class="col-3 my-auto">
                    <router-link :to="{ name: 'Credits' }">
                      <a v-on:click="menuItemClicked">About</a>
                    </router-link>
                </div>
                <div class="col-3 my-auto">

                  <div class="d-flex justify-content-end">
                    <div class="p-1">
                      <a v-on:click="tweetMessage()" class="hand-over" title="Share on Twitter">
                        <div class="twitter"></div>
                      </a>
                    </div>
                    <div class="p-1 ">
                      <a v-on:click="facebookThis()" class="hand-over" title="Share on Facebook">
                        <div class="facebook"></div>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="menu-mobile" v-if="!isIframe" class="row d-lg-none text-center menu collapse">
        <div class="col-12 flex-wrap">
          <router-link :to="{ name: 'Home', params: {}}">
            <h6>Home</h6>
          </router-link>
          <hr>
          <router-link v-for="person in getPeople"
            :key="person.name"
            :to="{ name: 'PersonRoute', params: { person: person.param }}">
            <h6>{{ person.name }}</h6>
          </router-link>
          <hr>
          <router-link v-for="topic in getTopics"
            :key="topic.name"
            :to="{ name: 'Conversation', params: { topic: topic.param }}">
            <h6>{{ topic.name }}</h6>
          </router-link>
          <hr>
          <router-link :to="{ name: 'MoreCoverage' }">
            <a v-on:click="menuItemClicked">
              <h6>More Coverage</h6>
            </a>
          </router-link>
          <router-link :to="{ name: 'Credits' }">
            <a v-on:click="menuItemClicked">
              <h6>About</h6>
            </a>
          </router-link>
          <div class="d-flex justify-content-center">
            <div class="p-1">
              <a v-on:click="tweetMessage()" class="hand-over" title="Share on Twitter">
                <div class="twitter"></div>
              </a>
            </div>
            <div class="p-1 ">
              <a v-on:click="facebookThis()" class="hand-over" title="Share on Facebook">
                <div class="facebook"></div>
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
  watch: {
    '$route' (to, from) {
      const el = this.$el.querySelector('#menu-mobile')
      if (!el.classList.contains('collapse')) {
        el.classList.add('collapse')
        this.$el.querySelector('.bt-open').classList.remove('d-none')
        this.$el.querySelector('.bt-closed').classList.add('d-none')
      }
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
  }
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
a:hover {
  text-decoration: none;
  color: black;
}

a {
  color: gray;
}
a .g{
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
  background-image: url("data:image/svg+xml,%3Csvg class='float-right mr-1' fill='rgb%2862,192,179%29' width='20' height='20' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 58 58'%3E%3Cpath class='cls-1' d='M53.85,0H3.15A3.15,3.15,0,0,0,0,3.15v50.7A3.15,3.15,0,0,0,3.15,57h27.3V35H23V26.33h7.41V20c0-7.37,4.49-11.38,11.06-11.38A62.15,62.15,0,0,1,48.15,9v7.69H43.61c-3.57,0-4.26,1.69-4.26,4.18v5.5H47.9L46.79,35H39.35V57h14.5A3.15,3.15,0,0,0,57,53.85V3.15A3.15,3.15,0,0,0,53.85,0Z'/%3E%3C/svg%3E");
}
.twitter {
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg class='float-right' fill='rgb%2862,192,179%29' width='20' height='20' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='White' x='0px' y='0px' viewBox='0 0 400 400' style='enable-background:new 0 0 400 400;' xml:space='preserve'%3E%3Cpath class='st0' d='M400,400H0V0h400V400z M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6 c10-7.2,18.7-16.3,25.6-26.6c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4 c-9.4-10-22.7-16.2-37.4-16.2c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6 c-4.4,7.6-6.9,16.4-6.9,25.8c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3 c-4.3,1.2-8.8,1.8-13.5,1.8c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22 c-4.1,0-8.2-0.2-12.2-0.7C97.7,293.1,124.7,301.6,153.6,301.6'/%3E%3C/svg%3E");
}
.youthradio-simple {
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
  background-image: url('../assets/images/yrlogosimple_fall.png');
  background-image: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 246 246' fill='rgb%2862,192,179%29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1842.82 954.359C1779.55 904.512 1692.83 845.301 1612.25 815.738C1569.39 800.102 1506.63 783.898 1457.89 803.859C1361.47 843.422 1390.32 944.379 1409.82 1014.08C1426.62 1074.68 1504.18 1224.14 1439.13 1256.79C1352.07 1300.25 1269.86 1108.48 1251.82 1075.94C1208.38 998.004 1165.38 920.34 1123.8 841.672C1069.42 738.57 1013.97 631.5 955.875 529.738C916.531 460.852 883.051 385.07 825.496 324.422C758.16 253.699 670.703 305.711 670.816 384.789C671.355 556.352 760.234 728.078 822.004 888.789C859.492 986.363 885.297 1042.33 922.273 1137.35C926.484 1148.14 961.84 1220.13 946.266 1229.11C933.617 1236.39 899.453 1179.93 882.688 1155.94C821.742 1068.85 764.504 987.391 690.742 904.621C653.395 862.691 571.594 784.238 495.273 810.398C407.191 840.699 429.934 933.809 449.742 992.617C479.586 1081.07 557.668 1241.5 562.012 1251.4C566.531 1261.33 557.488 1270.44 539.898 1260.79C522.246 1251.1 467.109 1214.36 431.836 1189.98C304.609 1093.34 84.7852 923.66 7.70703 861.59C67.25 376.031 480.781 0 982.449 0C1525.16 0 1964.87 439.762 1964.87 982.371C1964.87 1006.13 1963.79 1029.53 1962.08 1052.76C1922.92 1019.15 1883.13 986.18 1842.82 954.359ZM415.176 1286.56C467.789 1321.23 527.734 1366.67 594.867 1381.24C687.699 1401.53 692.645 1315.58 676.93 1266.52C648.047 1177.14 597.566 1093.28 563.352 1005.32C551.324 974.254 515.598 908 535.777 898.512C565.195 884.012 690.684 1055.04 748.695 1131.32C803.723 1203.78 852.641 1281.17 914.801 1349.78C936.148 1373.41 956.813 1392.87 994.957 1393.96C1043.13 1395.29 1060.36 1346.17 1059.47 1315.91C1058.09 1263.01 1039.46 1211.27 1025.22 1160.36C1000.95 1073.11 971.934 988.965 940.27 907.602C902.496 810.59 866.566 708.891 830.699 612.121C814.723 568.941 767.512 466.191 787.922 454.172C804.063 445.27 820.664 485.09 835.496 514.57C888.281 619.27 941.633 724.469 995.438 826.031C1041.31 912.5 1082.44 997.125 1129.28 1083.19C1173.17 1163.87 1211.88 1255.77 1285.92 1321.59C1371.56 1397.62 1558.48 1386.88 1576.52 1267.07C1590.93 1171.29 1547.22 1079.89 1516.84 991.578C1507.65 964.801 1486.79 922.02 1504.07 900.84C1516.46 885.602 1535.25 889.621 1544.06 891.629C1615.61 911.25 1674.76 957.531 1737.82 1003.5C1811.33 1057.13 1879.43 1116.14 1945.6 1176.89C1855.35 1626.24 1458.45 1964.85 982.449 1964.85C439.797 1964.85 0 1525.02 0 982.371C0 980.895 0.113281 979.273 0.199219 977.609C43.7695 1012.97 88.0859 1047.73 133.219 1082.13C225.141 1152.06 317.262 1221.96 415.176 1286.56Z' transform='translate%280 245.606%29 scale%280.125 -0.125%29' fill='rgb%2862,192,179%29'/%3E%3C/svg%3E");

}
.youthradio {
  height: 50px;
  width: 110px;
  background-repeat: no-repeat;
  background-image: url('../assets/images/yrlogo_fall.png');
  background-image: url("data:image/svg+xml,%3Csvg height='50' width='110' viewBox='0 0 516 246' fill='rgb%2862,192,179%29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2984.13 613.199H2912.81L2970.6 873.891H3040.89C3100.15 873.891 3144.35 828.16 3144.35 765.891C3144.35 683.512 3082.56 613.199 2984.13 613.199ZM3048.88 911.039H2936.91L2863.08 576.07H2977.11C3122.74 576.07 3188.04 676.98 3188.04 767.941C3188.04 851.781 3123.74 911.039 3048.88 911.039ZM3247.27 576.07H3288.94L3362.78 911.039H3321.08L3247.27 576.07ZM2581.86 687.559L2692.87 868.379L2723.99 687.559H2581.86ZM2674.29 911.039L2465.34 576.07H2515.06L2561.24 650.891H2728.04L2741.59 576.07H2786.79L2726.02 911.039H2674.29ZM2328.77 745.82H2240.38L2268.97 873.891H2352.36C2381.52 873.891 2409.64 851.781 2409.64 820.172C2409.64 779.988 2380.53 745.82 2328.77 745.82ZM2358.39 911.039H2235.34L2161.5 576.07H2203.17L2232.33 709.16H2302.17L2358.39 576.07H2404.6L2344.32 711.172C2409.64 715.691 2453.32 761.879 2453.32 823.641C2453.32 878.922 2406.62 911.039 2358.39 911.039ZM4018.67 1387.79L3992.55 1269.25H3872.52L3898.64 1387.79H3797.18L3723.33 1052.76H3824.78L3852.94 1180.84H3972.94L3944.86 1052.76H4046.3L4120.15 1387.79H4018.67ZM3222.69 1192.89C3215.66 1160.76 3194.03 1135.13 3152.87 1135.13C3114.68 1135.13 3097.11 1159.22 3096.59 1180.84C3096.59 1185.84 3097.11 1190.4 3097.62 1192.89L3140.79 1387.79H3037.82L2994.13 1190.4C2993.13 1185.34 2991.66 1173.28 2991.66 1169.25C2991.66 1097.46 3043.36 1046.72 3152.87 1046.72C3260.83 1046.72 3307.59 1110.01 3325.15 1190.9L3368.84 1387.79H3265.86L3222.69 1192.89ZM3575.21 607.172C3512.94 607.172 3462.21 646.852 3462.21 718.711C3462.21 811.59 3527.01 879.41 3603.87 879.41C3666.11 879.41 3716.88 839.73 3716.88 767.941C3716.88 675.02 3651.56 607.172 3575.21 607.172ZM3606.37 916.59C3501.88 916.59 3418.01 829.219 3418.01 716.691C3418.01 623.738 3486.82 570.031 3572.69 570.031C3677.69 570.031 3761.07 657.91 3761.07 770.441C3761.07 863.352 3692.27 916.59 3606.37 916.59ZM1842.82 954.359C1779.55 904.512 1692.83 845.301 1612.25 815.738C1569.39 800.102 1506.63 783.898 1457.89 803.859C1361.47 843.422 1390.32 944.379 1409.82 1014.08C1426.62 1074.68 1504.18 1224.14 1439.13 1256.79C1352.07 1300.25 1269.86 1108.48 1251.82 1075.94C1208.38 998.004 1165.38 920.34 1123.8 841.672C1069.42 738.57 1013.97 631.5 955.875 529.738C916.531 460.852 883.051 385.07 825.496 324.422C758.16 253.699 670.703 305.711 670.816 384.789C671.355 556.352 760.234 728.078 822.004 888.789C859.492 986.363 885.297 1042.33 922.273 1137.35C926.484 1148.14 961.84 1220.13 946.266 1229.11C933.617 1236.39 899.453 1179.93 882.688 1155.94C821.742 1068.85 764.504 987.391 690.742 904.621C653.395 862.691 571.594 784.238 495.273 810.398C407.191 840.699 429.934 933.809 449.742 992.617C479.586 1081.07 557.668 1241.5 562.012 1251.4C566.531 1261.33 557.488 1270.44 539.898 1260.79C522.246 1251.1 467.109 1214.36 431.836 1189.98C304.609 1093.34 84.7852 923.66 7.70703 861.59C67.25 376.031 480.781 0 982.449 0C1525.16 0 1964.87 439.762 1964.87 982.371C1964.87 1006.13 1963.79 1029.53 1962.08 1052.76C1922.92 1019.15 1883.13 986.18 1842.82 954.359ZM2264.99 1052.76H2366.44L2395.54 1185.84L2564.82 1387.79H2445.76L2359.38 1274.75L2322.21 1387.79H2213.26L2294.09 1185.84L2264.99 1052.76ZM2751.11 1303.87C2796.34 1303.87 2826.44 1273.75 2826.44 1232.57C2826.44 1181.34 2789.26 1136.13 2736.04 1136.13C2690.86 1136.13 2660.72 1166.26 2660.72 1207.46C2660.72 1258.66 2697.88 1303.87 2751.11 1303.87ZM2730.48 1046.72C2847.07 1046.72 2931.43 1133.61 2931.43 1240.61C2931.43 1331.01 2856.08 1393.3 2757.14 1393.3C2640.61 1393.3 2555.73 1307.39 2555.73 1200.44C2555.73 1109.51 2631.08 1046.72 2730.48 1046.72ZM415.176 1286.56C467.789 1321.23 527.734 1366.67 594.867 1381.24C687.699 1401.53 692.645 1315.58 676.93 1266.52C648.047 1177.14 597.566 1093.28 563.352 1005.32C551.324 974.254 515.598 908 535.777 898.512C565.195 884.012 690.684 1055.04 748.695 1131.32C803.723 1203.78 852.641 1281.17 914.801 1349.78C936.148 1373.41 956.813 1392.87 994.957 1393.96C1043.13 1395.29 1060.36 1346.17 1059.47 1315.91C1058.09 1263.01 1039.46 1211.27 1025.22 1160.36C1000.95 1073.11 971.934 988.965 940.27 907.602C902.496 810.59 866.566 708.891 830.699 612.121C814.723 568.941 767.512 466.191 787.922 454.172C804.063 445.27 820.664 485.09 835.496 514.57C888.281 619.27 941.633 724.469 995.438 826.031C1041.31 912.5 1082.44 997.125 1129.28 1083.19C1173.17 1163.87 1211.88 1255.77 1285.92 1321.59C1371.56 1397.62 1558.48 1386.88 1576.52 1267.07C1590.93 1171.29 1547.22 1079.89 1516.84 991.578C1507.65 964.801 1486.79 922.02 1504.07 900.84C1516.46 885.602 1535.25 889.621 1544.06 891.629C1615.61 911.25 1674.76 957.531 1737.82 1003.5C1811.33 1057.13 1879.43 1116.14 1945.6 1176.89C1855.35 1626.24 1458.45 1964.85 982.449 1964.85C439.797 1964.85 0 1525.02 0 982.371C0 980.895 0.113281 979.273 0.199219 977.609C43.7695 1012.97 88.0859 1047.73 133.219 1082.13C225.141 1152.06 317.262 1221.96 415.176 1286.56ZM3458.68 1052.76H3560.15L3614.41 1299.39H3703.83L3723.36 1387.79H3442.59L3423.04 1299.39H3512.94L3458.68 1052.76Z' transform='translate%280 245.606%29 scale%280.125 -0.125%29' fill='rgb%2862,192,179%29'/%3E%3C/svg%3E");
}
.youthradio-w{
  height: 50px;
  width: 110px;
  background-repeat: no-repeat;
  background-image: url('../assets/images/yrlogow_fall.png');
  background-image: url("data:image/svg+xml,%3Csvg height='50' width='110' viewBox='0 0 516 246' fill='rgb%28255,255,255%29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2984.13 613.199H2912.81L2970.6 873.891H3040.89C3100.15 873.891 3144.35 828.16 3144.35 765.891C3144.35 683.512 3082.56 613.199 2984.13 613.199ZM3048.88 911.039H2936.91L2863.08 576.07H2977.11C3122.74 576.07 3188.04 676.98 3188.04 767.941C3188.04 851.781 3123.74 911.039 3048.88 911.039ZM3247.27 576.07H3288.94L3362.78 911.039H3321.08L3247.27 576.07ZM2581.86 687.559L2692.87 868.379L2723.99 687.559H2581.86ZM2674.29 911.039L2465.34 576.07H2515.06L2561.24 650.891H2728.04L2741.59 576.07H2786.79L2726.02 911.039H2674.29ZM2328.77 745.82H2240.38L2268.97 873.891H2352.36C2381.52 873.891 2409.64 851.781 2409.64 820.172C2409.64 779.988 2380.53 745.82 2328.77 745.82ZM2358.39 911.039H2235.34L2161.5 576.07H2203.17L2232.33 709.16H2302.17L2358.39 576.07H2404.6L2344.32 711.172C2409.64 715.691 2453.32 761.879 2453.32 823.641C2453.32 878.922 2406.62 911.039 2358.39 911.039ZM4018.67 1387.79L3992.55 1269.25H3872.52L3898.64 1387.79H3797.18L3723.33 1052.76H3824.78L3852.94 1180.84H3972.94L3944.86 1052.76H4046.3L4120.15 1387.79H4018.67ZM3222.69 1192.89C3215.66 1160.76 3194.03 1135.13 3152.87 1135.13C3114.68 1135.13 3097.11 1159.22 3096.59 1180.84C3096.59 1185.84 3097.11 1190.4 3097.62 1192.89L3140.79 1387.79H3037.82L2994.13 1190.4C2993.13 1185.34 2991.66 1173.28 2991.66 1169.25C2991.66 1097.46 3043.36 1046.72 3152.87 1046.72C3260.83 1046.72 3307.59 1110.01 3325.15 1190.9L3368.84 1387.79H3265.86L3222.69 1192.89ZM3575.21 607.172C3512.94 607.172 3462.21 646.852 3462.21 718.711C3462.21 811.59 3527.01 879.41 3603.87 879.41C3666.11 879.41 3716.88 839.73 3716.88 767.941C3716.88 675.02 3651.56 607.172 3575.21 607.172ZM3606.37 916.59C3501.88 916.59 3418.01 829.219 3418.01 716.691C3418.01 623.738 3486.82 570.031 3572.69 570.031C3677.69 570.031 3761.07 657.91 3761.07 770.441C3761.07 863.352 3692.27 916.59 3606.37 916.59ZM1842.82 954.359C1779.55 904.512 1692.83 845.301 1612.25 815.738C1569.39 800.102 1506.63 783.898 1457.89 803.859C1361.47 843.422 1390.32 944.379 1409.82 1014.08C1426.62 1074.68 1504.18 1224.14 1439.13 1256.79C1352.07 1300.25 1269.86 1108.48 1251.82 1075.94C1208.38 998.004 1165.38 920.34 1123.8 841.672C1069.42 738.57 1013.97 631.5 955.875 529.738C916.531 460.852 883.051 385.07 825.496 324.422C758.16 253.699 670.703 305.711 670.816 384.789C671.355 556.352 760.234 728.078 822.004 888.789C859.492 986.363 885.297 1042.33 922.273 1137.35C926.484 1148.14 961.84 1220.13 946.266 1229.11C933.617 1236.39 899.453 1179.93 882.688 1155.94C821.742 1068.85 764.504 987.391 690.742 904.621C653.395 862.691 571.594 784.238 495.273 810.398C407.191 840.699 429.934 933.809 449.742 992.617C479.586 1081.07 557.668 1241.5 562.012 1251.4C566.531 1261.33 557.488 1270.44 539.898 1260.79C522.246 1251.1 467.109 1214.36 431.836 1189.98C304.609 1093.34 84.7852 923.66 7.70703 861.59C67.25 376.031 480.781 0 982.449 0C1525.16 0 1964.87 439.762 1964.87 982.371C1964.87 1006.13 1963.79 1029.53 1962.08 1052.76C1922.92 1019.15 1883.13 986.18 1842.82 954.359ZM2264.99 1052.76H2366.44L2395.54 1185.84L2564.82 1387.79H2445.76L2359.38 1274.75L2322.21 1387.79H2213.26L2294.09 1185.84L2264.99 1052.76ZM2751.11 1303.87C2796.34 1303.87 2826.44 1273.75 2826.44 1232.57C2826.44 1181.34 2789.26 1136.13 2736.04 1136.13C2690.86 1136.13 2660.72 1166.26 2660.72 1207.46C2660.72 1258.66 2697.88 1303.87 2751.11 1303.87ZM2730.48 1046.72C2847.07 1046.72 2931.43 1133.61 2931.43 1240.61C2931.43 1331.01 2856.08 1393.3 2757.14 1393.3C2640.61 1393.3 2555.73 1307.39 2555.73 1200.44C2555.73 1109.51 2631.08 1046.72 2730.48 1046.72ZM415.176 1286.56C467.789 1321.23 527.734 1366.67 594.867 1381.24C687.699 1401.53 692.645 1315.58 676.93 1266.52C648.047 1177.14 597.566 1093.28 563.352 1005.32C551.324 974.254 515.598 908 535.777 898.512C565.195 884.012 690.684 1055.04 748.695 1131.32C803.723 1203.78 852.641 1281.17 914.801 1349.78C936.148 1373.41 956.813 1392.87 994.957 1393.96C1043.13 1395.29 1060.36 1346.17 1059.47 1315.91C1058.09 1263.01 1039.46 1211.27 1025.22 1160.36C1000.95 1073.11 971.934 988.965 940.27 907.602C902.496 810.59 866.566 708.891 830.699 612.121C814.723 568.941 767.512 466.191 787.922 454.172C804.063 445.27 820.664 485.09 835.496 514.57C888.281 619.27 941.633 724.469 995.438 826.031C1041.31 912.5 1082.44 997.125 1129.28 1083.19C1173.17 1163.87 1211.88 1255.77 1285.92 1321.59C1371.56 1397.62 1558.48 1386.88 1576.52 1267.07C1590.93 1171.29 1547.22 1079.89 1516.84 991.578C1507.65 964.801 1486.79 922.02 1504.07 900.84C1516.46 885.602 1535.25 889.621 1544.06 891.629C1615.61 911.25 1674.76 957.531 1737.82 1003.5C1811.33 1057.13 1879.43 1116.14 1945.6 1176.89C1855.35 1626.24 1458.45 1964.85 982.449 1964.85C439.797 1964.85 0 1525.02 0 982.371C0 980.895 0.113281 979.273 0.199219 977.609C43.7695 1012.97 88.0859 1047.73 133.219 1082.13C225.141 1152.06 317.262 1221.96 415.176 1286.56ZM3458.68 1052.76H3560.15L3614.41 1299.39H3703.83L3723.36 1387.79H3442.59L3423.04 1299.39H3512.94L3458.68 1052.76Z' transform='translate%280 245.606%29 scale%280.125 -0.125%29' fill='rgb%28255,255,255%29'/%3E%3C/svg%3E");

}

</style>
