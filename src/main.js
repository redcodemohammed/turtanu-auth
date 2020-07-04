import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false
Vue.use(VueCookie);
const vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
});

vue.$mount('#app');
