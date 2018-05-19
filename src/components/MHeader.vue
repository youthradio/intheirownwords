<template>
  <header>
    <div class="splash-header mb-5 position-relative">
      <div class="no-margin">
        <div class="d-flex justify-content-between bd-highlight mb-3">
          <div class="p-2">
            <a class="navbar-brand" href="www.youthradio.org" target="_blank">
              <img height="50" src="../assets/images/yrlogofull.png">
            </a>
          </div>
          <div class="p-2 bd-highlight">
            <nav class="navbar navbar-expand-sm navbar-custom">
              <div class="ml-auto">
                <button id="menu-btn" class="navbar-toggler custom-toggler"
                    type="button"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
              <div class="collapse navbar-collapse text-right">

                <ul class="navbar-nav mt-2 mt-lg-0">
                  <li class="nav-item active">
                    <router-link :to="{ name: 'Home', params: {}}"><a class="nav-link">Home</a></router-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"> More Coverage <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{ name: 'Credits' }"> <a v-on:click="menuItemClicked" class="nav-link" >Credits</a></router-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Share</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="row h-100 no-margin justify-content-center align-items-center">
        <div class="col-10 col-md-4">
          <div class="d-flex align-items-start">
            <div class="mr-4">
              <img class="img-fluid" :src="require('../assets/images/NB_symbol.svg')">
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
          <div class="d-flex justify-content-center flex-wrap">
            <div class="mt-5">
              <p>
                In Their Own Words is an exploration of
                non-binary gender indentity through
                essays and conversations produced by
                non-binary teens & young adults at
                Youth Radio.
              </p>
            </div>
            <div v-on:click="scrollTo" class="mt-5">
              <svg width="30" height="30" class="octicon octicon-triangle-down" fill="white" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path></svg>
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
    this.$el.querySelector('#menu-btn').addEventListener('click', () => {
      const el = this.$el.querySelector('.navbar-collapse')
      el.classList.contains('collapse') ? el.classList.remove('collapse') : el.classList.add('collapse')
    })
    const colors = [
      ['#f5a623', '#4a90e2'],
      ['#BD10e0', '#3dc4a6']]
    const gradientEl = this.$el.querySelector('.splash-header')
    const rand = Math.floor(Math.random() * 2)
    gradientEl.style.backgroundImage = `linear-gradient(45deg, ${colors[rand][0]}, ${colors[rand][1]})`
  },
  methods: {
    menuItemClicked () {
      this.$el.querySelector('#menu-btn').click()
    },
    scrollTo () {
      window.scroll({
        top: this.$el.offsetHeight,
        behavior: 'smooth'
      })
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

    background-size: 100% 200%;
    -webkit-animation: Pattern 3s ease infinite;
    -moz-animation: Pattern 3s ease infinite;
    -o-animation: Pattern 3s ease infinite;
    animation: Pattern 3s ease infinite;

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
  color: gray;
}
h1 .w {
  color: white;
}
h1 span {
  display: block;
}
p {
  color: white;
}

.navbar-custom {
  background-color: none;
}
/* change the brand and text color */
.navbar-custom .navbar-brand,
.navbar-custom .navbar-text {
  color: rgba(255,255,255,.8);
}
/* change the link color */
.navbar-custom .navbar-nav .nav-link {
  color: rgba(255,255,255,.5);
}
/* change the color of active or hovered links */
.navbar-custom .nav-item.active .nav-link,
.navbar-custom .nav-item:hover .nav-link {
  color: #ffffff;
}

/* } */
/* @media (min-width: 576px) {
  h3, h3 a {
    color: grey;
  }
  .splash-header {
    height: 10vh;
  }
} */

@keyframes Pattern {
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 100% 0%
  }
  50% {
    background-position: 0% 100%
  }
  75% {
    background-position: 100% 100%
  }
  100% {
    background-position: 100% 0%
  }
}
.title-splash {
  bottom: 0;
}
@media screen and (min-width: 576px) {
  h1 {
     font-size: 52px;
  }
  h3 {
     font-size: 25px;
  }
}
@media screen and (max-width: 576px) {
  h3 {
     font-size: 20px;
  }
}
.custom-toggler.navbar-toggler {
    border-color: rgba(255,255,255, 0.7);
    padding-left: 6px;
    padding-right: 6px;

}
.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
</style>
