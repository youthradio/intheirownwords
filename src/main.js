// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import smoothscroll from 'smoothscroll-polyfill'
import Vue from 'vue'
import store from './store/store'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/theythem.css'
smoothscroll.polyfill()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
