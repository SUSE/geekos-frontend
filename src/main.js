// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'

Vue.use(VueAxios, axios)

// https://github.com/hilongjw/vue-lazyload
Vue.use(VueLazyload)

Vue.filter('pluralize', function (value, count) {
  if (count > 1) {
    return value + 's'
  } else {
    return value
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
