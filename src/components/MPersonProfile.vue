<template>
  <div id="profile" v-if="getPerson">

    <div class="row my-3">
      <div class="col-2 col-md-3 my-auto">
        <hr>
      </div>
      <div class="col-12  col-md-2">
        <img class="img-fluid " :src="require('../assets/images/' + getPerson.image)">
      </div>
      <div :class="`${getPerson.cssclass} col-12  col-md-4`">
        <h2>{{ getPerson.name }}</h2>
        <p class="font-italic font-weight-light"> {{ getPerson.quote }}</p>
        <p> {{ getPerson.age }}, {{ getPerson.pronoum }} </p>
      </div>
      <div class="col-2 col-md-3 my-auto">
        <hr>
      </div>
    </div>

    <div class="row my-3">
        <div class="col-12 col-md-8 offset-md-2" v-html="getPerson.essay">
        </div>
      </div>

    </div>
</template>

<script>
export default {
  props: {
    person: {
      type: String
    },
    people: {
      type: Object
    }
  },
  name: 'MPersonProfile',
  data () {
    return {
      msg: 'profile'
    }
  },
  computed: {
    getPerson () {
      if (this.people) {
        return ({
          name: this.people[this.person].info.Person_Name,
          age: this.people[this.person].info.Age,
          cssclass: this.people[this.person].info.Person_Class,
          pronoum: this.people[this.person].info.Pronoum,
          quote: this.people[this.person].info.Quote,
          essay: this.people[this.person].info.Essay,
          image: this.people[this.person].info.Person_Image
        })
      } else {
        return null
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
