import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Load bootstrap vue 
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Load main.css
import './assets/css/main.css'

// Load notif 
import VueToast from 'vue-toast-notification';
// // Import one of the available themes
import 'vue-toast-notification/dist/theme-default.css';


Vue.use(VueToast);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');



