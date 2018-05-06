<template>
  <section>
    <div class="row my-3">
      <div class="col-2 my-auto">
        <hr>
      </div>
      <div class="col-12  col-md-8">
        <div v-if="topic === ''">
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable infancy. </p>
          <p> Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
        </div>

      </div>
      <div class="col-2 my-auto">
        <hr>

      </div>
    </div>
    <div>
      <div class="row">
        <div class="col-12  col-md-8 offset-md-2">
          <div class="row ">
            <div v-for="(data, person, index) in people" :key="index" class="col-12 col-md-3 text-left">
              <div class="row">

                <div class="col-4 col-md-12">
                  <router-link :to="{ name: 'PersonRoute', params: { person: person }}">
                      <img :class="`img-fluid person${index+1}`" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzA50b0MoyZUx7UxC8ccyvXpRRx6R7fAG_FhVVnhEhSVsiuUA">
                  </router-link>
                </div>
                <div class="col-8 col-md-12">
                  <div :class="`p${index+1}text text-md-center pt-3`">
                    <h3> {{ person }}  </h3>
                    <em> {{ data.info.Quote }} </em>
                    <p> {{ data.info.Age }}, {{ data.info.Pronoum }}</p>
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
