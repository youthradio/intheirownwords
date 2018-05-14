<template>
  <footer class="row text-center m-5">
    <div class="col-12">
      {{msg}}
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MFooter',
  data () {
    return {
      msg: '© 2018 Youth Radio'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
