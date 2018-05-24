<template>
    <div class="container-fluid">
      <router-view name="header"/>
      <router-view name="profile"/>
      <router-view name="section"/>
      <router-view name="topics"/>
      <router-view name="conversation"/>
      <router-view name="footer"/>
      <router-view name="notfound"/>
    </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      isLoading: false,
      appData: null,
      allTopics: null,
      allPeople: null
    }
  },
  metaInfo () {
    return {
      title: 'In their own words',
      meta: [
        { vmid: 'charset', charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        // OpenGraph
        { property: 'og:title', content: 'In their own words' },
        { property: 'og:site_name', content: 'In their own words' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://itow.herokuapp.com' },
        { property: 'og:image', content: '/static/images/vin2.png' },
        // Often the same as your meta description, but not always.
        { property: 'og:description', content: 'An exploration of non-binarygender indentity through essays and conversations produced by non-binary teens & young adults at Youth Radio.' },

        // Twitter card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: 'https://itow.herokuapp.com' },
        { name: 'twitter:title', content: 'In their own words' },
        { name: 'twitter:description', content: 'An exploration of non-binarygender indentity through essays and conversations produced by non-binary teens & young adults at Youth Radio.' },
        // Your twitter handle, if you have one.
        { name: 'twitter:creator', content: '@youthradio' },
        { name: 'twitter:image:src', content: 'https://itow.herokuapp.com/static/socialimg.png' },

        // Google / Schema.org markup:
        { itemprop: 'name', content: 'In their own words' },
        { itemprop: 'description', content: 'An exploration of non-binarygender indentity through essays and conversations produced by non-binary teens & young adults at Youth Radio.' },
        { itemprop: 'image', content: 'https://itow.herokuapp.com/static/vin2.png' }
      ],
      link: [
        { rel: 'favicon', href: '/static/images/socialimg.png' },
        { rel: 'canonical', href: 'https://itow.herokuapp.com' }
      ]
    }
  },
  created () {
    this.isLoading = true
    this.$store.dispatch('fetchData') // fetch data on store vuex
    // this.$root.$emit('triggerScroll')
  }
}

</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Ramabhadra");
  @import url("https://fonts.googleapis.com/css?family=Montserrat");
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,800");
</style>
