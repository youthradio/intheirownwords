<template>
  <div class="row">
    <div class="col-12 h-100 my-auto">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundComponent',
  data () {
    return {
      msg: 'ERROR - ERROR - PAGE NOT FOUND'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
