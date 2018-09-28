export default {
  computed: {
    isHome () {
      return this.$route.name === 'Home'
    },
    isIframe () {
      return this.$store.state.isIframe;
    }
  },
  methods: {

  },
}
