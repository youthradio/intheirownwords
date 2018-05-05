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
        <div class="col-12 col-md-2 ">
        </div>
        <div class="col-12  col-md-8">
          <div class="row ">
            <div class="col-12 col-md-3 text-left">
              <div class="row">

                <div class="col-4 col-md-12">
                  <img class="img-fluid person1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzA50b0MoyZUx7UxC8ccyvXpRRx6R7fAG_FhVVnhEhSVsiuUA">
                </div>
                <div class="col-8 col-md-12">
                  <div class="p1text text-md-center pt-3">
                    <h3> Person1  </h3>
                    <em> This is a quotes</em>
                    <p> 16, he/they </p>
                  </div>
                </div>
              </div>

            </div>

            <div class="col-12 col-md-3">
              <div class="row">
                <div class="col-4 col-md-12 ">
                  <img class="img-fluid person2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzA50b0MoyZUx7UxC8ccyvXpRRx6R7fAG_FhVVnhEhSVsiuUA">

                </div>

                <div class="col-8 col-md-12">
                  <div class="p2text text-md-center pt-3">
                    <h3> Person1  </h3>
                    <em> This is a quotes</em>
                    <p> 16, he/they </p>
                  </div>
                </div>
              </div>

            </div>

            <div class="col-12 col-md-3">

              <div class="row">
                <div class="col-4 col-md-12">
                  <img class="img-fluid person3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzA50b0MoyZUx7UxC8ccyvXpRRx6R7fAG_FhVVnhEhSVsiuUA">
                </div>
                <div class="col-8 col-md-12">
                  <div class="p3text text-md-center pt-3">
                    <h3> Person1  </h3>
                    <em> This is a quotes</em>
                    <p> 16, he/they </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-3">
              <div class="row">
                <div class="col-4 col-md-12">
                  <img class="img-fluid person4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzA50b0MoyZUx7UxC8ccyvXpRRx6R7fAG_FhVVnhEhSVsiuUA">

                </div>
                <div class="col-8 col-md-12">
                  <div class="p4text text-md-center pt-3">
                    <h3> Person1  </h3>
                    <em> This is a quotes</em>
                    <p> 16, he/they </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
        <div class="col-12 col-md-2">
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'MSection',
  props: {
    topic: {
      type: String,
      default: ''
    }
  },
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
