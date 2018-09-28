<template>
  <section>

    <div
      v-if="topic === ''"
      class="row my-3">
      <div class="col-12 col-md-2 my-auto">
        <hr>
      </div>
      <div class="col-12 col-md-8 text-center">
        <p>
          Click on a portrait to learn more about that individual’s experience, or select a topic to hear conversations about life beyond the binary.
        </p>
      </div>
      <div class="col-12 col-md-2 my-auto">
        <hr>
      </div>
    </div>

    <div>
      <div class="row mx-auto">
        <div class="col-12  col-md-10 offset-md-1">
          <div class="row">
            <!-- Profile for loop -->
            <div
              v-for="(data, person, index) in getPeople"
              :key="index"
              :class="[ (isHome ? 'col-12' : 'col-6'), 'col-md-3']">
              <div :class="[data.info.Person_Class,'row py-2']">
                <div class="col-12 col-md-12 text-center">
                  <router-link
                    :to="{ name: 'PersonRoute', params: { person: person }}">
                    <img
                      :src="require('../assets/images/' + data.info.Person_Image)"
                      class="img-fluid img-limit profile-shadow">
                    <h5> {{ person }} </h5>
                  </router-link>
                </div>
                <div class="col-12 col-md-12 my-auto text-center">
                  <div class="text-md-center">
                    <p>
                      <span
                        v-if="!topic"
                        class="font-italic break"> {{ data.info.Quote }} </span>
                      <span>{{ data.info.Age }}, {{ data.info.Pronoum }}</span>
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
import CommonUtils from '../mixins/CommonUtils'

export default {
  name: 'MSection',
  mixins: [
    CommonUtils,
  ],
  props: {
    topic: {
      type: String,
      default: ''
    }
  },
  computed: {
    getPeople () {
      return this.$store.state.allPeople
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.break:after {
    content: '\A';
    white-space: pre;
}
.img-limit {
  max-width: 200px;
  width: 100%;
}

</style>
