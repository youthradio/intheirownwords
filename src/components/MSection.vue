<template>
  <section>

    <div v-if="topic === ''" class="row my-3">
        <div class="col-12  col-md-2 my-auto">
          <hr>
        </div>
        <div class="col-12  col-md-8">
            <p >
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable infancy. </p> <p> Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
        </div>
        <div class="col-12 col-md-2 my-auto">
          <hr>
        </div>
    </div>

    <div>
      <div class="row">
        <div class="col-12  col-md-8 offset-md-2">
          <div class="row">
            <!-- Profile for loop -->
            <div v-for="(data, person, index) in people" :key="index" class="col-12 col-md-3">
              <div class="row">
                <div class="col-4 col-md-12">
                  <router-link :to="{ name: 'PersonRoute', params: { person: person }}">
                    <img class="img-fluid " :src="require('../assets/images/' + data.info.Person_Image)">
                  </router-link>
                </div>
                <div class="col-8 col-md-12">
                  <div :class="`${data.info.Person_Class} text-md-center`">
                    <router-link :to="{ name: 'PersonRoute', params: { person: person }}">
                      <h3> {{ person }} </h3>
                    </router-link>
                    <p> <span v-if="!topic" class="font-italic"> {{ data.info.Quote }} </span>
                      {{ data.info.Age }}, {{ data.info.Pronoum }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  props: {
    people: {
      type: Object
    },
    topic: {
      type: String,
      default: ''
    }
  },
  name: 'MSection',
  data () {
    return {
      msg: 'section sds sds'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
