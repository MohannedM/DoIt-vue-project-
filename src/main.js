import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuelidate from 'vuelidate'
import './registerServiceWorker'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(vuelidate);

axios.defaults.baseURL = 'https://todo-app-ed98b.firebaseio.com/';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
