<template>
  <div id="app">
    <div class="container-fluid">
      <router-view name="header"/>
      <router-view name="profile"/>
      <router-view name="section"/>
      <router-view name="conversation"/>
      <router-view name="footer"/>
      <router-view name="notfound"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Ramabhadra");
  @import url("https://fonts.googleapis.com/css?family=Montserrat");
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,800");
  #app {
  }
</style>
