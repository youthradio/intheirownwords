<template>
  <div id="profile">

    <div class="row my-3">
      <div class="col-2 col-md-3 my-auto">
        <hr>
      </div>
      <div class="col-12  col-md-2">
        <img class="img-fluid " :src="require('../assets/images/' + filterPerson('Person_Image'))">
      </div>
      <div :class="`${filterPerson('Person_Class')} col-12  col-md-4`">
        <h2>{{ filterPerson('Person_Name') }}</h2>
        <p class="font-italic font-weight-light"> {{ filterPerson('Quote') }}</p>
        <p> {{ filterPerson('Age') }}, {{ filterPerson('Pronoum') }} </p>
      </div>
      <div class="col-2 col-md-3 my-auto">
        <hr>
      </div>
    </div>

    <div class="row my-3">
        <div class="col-12 col-md-8 offset-md-2" v-html="filterPerson('Essay')">
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
  methods: {
    filterPerson (key) {
      if (this.people) {
        return this.people[this.person]['info'][key]
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
