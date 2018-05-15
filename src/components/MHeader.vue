<template>
  <header class="row text-center">
      <div class="col-12 col-md-3 my-auto text-center pl-5">
          <a href="www.youthradio.org" target="_blank"> <img class="" src="../assets/images/youthradiologo.png" height="50px">
          </a>
      </div>
      <div class="col-12 col-md-6 my-auto ">
          <h2 class=""><router-link :to="{ name: 'Home', params: {}}">They / Them</router-link></h2>
      </div>
      <div class="col-md-3 col-12 my-auto text-center ">
          <ul>
            <li> <a href=""> More Coverage </a> </li>
            <li> <a href="credits.html"> Credits </a> </li>
            <li> <a href="">Share</a> </li>
          </ul>
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
