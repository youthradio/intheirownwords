<template>
  <section id="credits">
    <h1>Credits </h1>
  </section>
</template>

<script>
export default {
  props: {
    topic: {
      type: String,
      default: ''
    }
  },
  name: 'MSection',
  computed: {
    getPeople () {
      return this.$store.state.allPeople
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
