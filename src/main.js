import Vue from 'vue'
import App from './App'
import Request from 'vue-resource'
import router from './router'

Vue.config.productionTip = false
Vue.use(Request)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
