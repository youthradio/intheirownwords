// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'custom-event-polyfill'
import 'url-polyfill'
import smoothscroll from 'smoothscroll-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/theythem.css'
import store from './store/store'
smoothscroll.polyfill()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
