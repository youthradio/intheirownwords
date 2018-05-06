<template>
  <header>
    <div class="row text-center">
      <div class="col-12 col-md-3 my-auto text-left pl-5">
        <a href="www.youthradio.org" target="_blank"> <img class="" src="https://youthradio.org/wp-content/themes/youthradio-v2/assets/images/s/footer-logo.png" height="50px">
              </a>
      </div>
      <div class="col-12 col-md-6 my-auto ">
        <h1 class="">   <router-link :to="{ name: 'Home', params: {}}">They / Them</router-link> </h1>
      </div>
      <div class="col-md-3 col-12 my-auto">
        <ul>
          <li> More Coverage </li>
          <li> Credits </li>
          <li> Share </li>
        </ul>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
