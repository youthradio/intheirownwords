<template>
  <header>
    <div class="splash-header position-relative">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="www.youthradio.org" target="_blank">
          <img class="" src="../assets/images/youthradiologo.png" height="50px">
        </a>
        <button id="menu-btn" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
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
      <div class="position-absolute title-splash row">
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
      ['#BD10e0', '#3dc4a6']
    ]
    const gradientEl = this.$el.querySelector('.splash-header')
    const rand = Math.floor(Math.random() * 2)
    gradientEl.style.backgroundImage = `linear-gradient(45deg, ${colors[rand][0]}, ${colors[rand][1]})`
    console.log(gradientEl.style.backgroundImage)

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.splash-header {
    height: 100vh;
    overflow: hidden;
    background: -webkit-linear-gradient(45deg, #f5a623, #BD10e0);
    background: -moz-linear-gradient(45deg, #f5a623, #BD10e0);
    background: -o-linear-gradient(45deg, #f5a623, #BD10e0);
    background: linear-gradient(45deg, #f5a623, #BD10e0);

    background-size: 100% 200%;
    -webkit-animation: Pattern 10s ease infinite;
    -moz-animation: Pattern 10s ease infinite;
    -o-animation: Pattern 10s ease infinite;
    animation: Pattern 10s ease infinite;

    padding: 0;
    margin-right: -15px;
    margin-left: -15px;
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
h1 {
  padding: 1em 1em;
  color: white;
}
h3 a {
  color: white;
}
h1 span {
  display: block;
}
</style>
