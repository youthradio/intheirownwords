<template>
  <div id="profile">

    <div class="row my-3">
      <div class="col-12 col-md-3 my-auto">
        <hr>
      </div>
      <div class="col-12 col-md-2 text-center text-md-left">
        <img
          :src="require('../assets/images/' + getPerson.image)"
          class="img-fluid img-limit">
      </div>
      <div :class="[getPerson.cssclass, 'col-12 col-md-4 text-center text-md-left']">
        <h2>{{ getPerson.name }}</h2>
        <p class="font-italic font-weight-light"> {{ getPerson.quote }}</p>
        <p> {{ getPerson.age }}, {{ getPerson.pronoum }} </p>
      </div>
      <div class="col-12 col-md-3 my-auto">
        <hr>
      </div>
    </div>

    <div class="row my-3">
      <div
        class="col-12 col-md-8 offset-md-2"
        v-html="getPerson.essay" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'MPersonProfile',
  props: {
    person: {
      type: String,
      default: ''
    }
  },
  computed: {
    getPerson () {
      return ({
        name: this.$store.state.allPeople[this.person].info.Person_Name,
        age: this.$store.state.allPeople[this.person].info.Age,
        cssclass: this.$store.state.allPeople[this.person].info.Person_Class,
        pronoum: this.$store.state.allPeople[this.person].info.Pronoum,
        quote: this.$store.state.allPeople[this.person].info.Quote,
        essay: this.$store.state.allPeople[this.person].info.Essay,
        image: this.$store.state.allPeople[this.person].info.Person_Image
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-limit {
  max-width: 200px;
  width: 100%;
}
</style>
