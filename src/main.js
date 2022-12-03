import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
//使用VueMeta綁定head tag
Vue.use(VueMeta,{
  keyName:'head'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
