<template>
    <div class="container-fluid">
      <router-view name="header"/>
      <router-view name="profile"/>
      <router-view name="section"/>
      <router-view name="conversation"/>
      <router-view name="topics"/>
      <router-view name="footer"/>
    </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      isLoading: false,
      appData: null,
      allTopics: null,
      allPeople: null
    }
  },
  created () {
    this.isLoading = true
    this.$store.dispatch('fetchData') // fetch data on store vuex
    // this.$root.$emit('triggerScroll')
  }
}

</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Ramabhadra");
  @import url("https://fonts.googleapis.com/css?family=Montserrat");
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,800");
</style>
