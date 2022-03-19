import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Load bootstrap vue 
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Load main.css
import './assets/css/main.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
