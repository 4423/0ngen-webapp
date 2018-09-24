import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBdWUKAylpU0hcWJwkW9CHuXAp6PAOwuLs",
  authDomain: "ongen-webapp.firebaseapp.com",
  databaseURL: "https://ongen-webapp.firebaseio.com",
  projectId: "ongen-webapp",
  storageBucket: "ongen-webapp.appspot.com",
  messagingSenderId: "431314791545"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
