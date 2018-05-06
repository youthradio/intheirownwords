<template>
  <div id="profile">
    {{msg}}
  </div>
</template>

<script>
export default {
  props: ['people'],
  name: 'MPersonProfile',
  data () {
    return {
      msg: 'profile'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
