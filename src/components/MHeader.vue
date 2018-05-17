<template>
  <header>
    <div class="splash-header position-relative">
      <nav class="navbar navbar-expand-lg navbar-custom">
        <a class="navbar-brand" href="www.youthradio.org" target="_blank">
          <img class="" src="../assets/images/youthradiologo.png" height="50px">
        </a>
        <button id="menu-btn" class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <h3 ><router-link :to="{ name: 'Home', params: {}}">They / Them</router-link></h3>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#"> More Coverage <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Credits</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Share</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="position-absolute title-splash row d-sm-none">
          <h1><span>In</span>THEIR<span>Words</span></h1>
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
    const styles = window.getComputedStyle(gradientEl)
    if (!styles.backgroundImage) {
      // only randomize if there is a gradient
      gradientEl.style.backgroundImage = `linear-gradient(45deg, ${colors[rand][0]}, ${colors[rand][1]})`
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media (max-width: 576px) {
  .splash-header {
      height: 100vh;
      overflow: hidden;
      background: -webkit-linear-gradient(45deg, #f5a623, #BD10e0);
      background: -moz-linear-gradient(45deg, #f5a623, #BD10e0);
      background: -o-linear-gradient(45deg, #f5a623, #BD10e0);
      background: linear-gradient(45deg, #f5a623, #BD10e0);

      background-size: 100% 200%;
      -webkit-animation: Pattern 2s ease infinite;
      -moz-animation: Pattern 2s ease infinite;
      -o-animation: Pattern 2s ease infinite;
      animation: Pattern 2s ease infinite;

      padding: 0;
      margin-right: -15px;
      margin-left: -15px;
  }
  h3, h3 a {
    color: white;
  }
  h1 span {
    display: block;
  }
  h1 {
    padding: 1em 1em;
    font-size: 10vw;
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
  .fa.fa-navicon {
    color: white;
  }
}
@media (min-width: 576px) {
  h3, h3 a {
    color: grey;
  }
  .splash-header {
    height: 10vh;
  }
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
  h1 {
     font-size: 42px;
  }
}
h3 {
   font-size: 35px;
}
.custom-toggler.navbar-toggler {
    border-color: rgba(255,255,255, 0.7);
}
.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
</style>
