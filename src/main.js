import '@babel/polyfill';
import Vue from 'vue';
import { createSimpleTransition } from 'vuetify/es5/util/helpers';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookie from 'vue-cookie';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(VueCookie);
axios.defaults.headers.common['Accept-language'] = Vue.prototype.$cookie.get('sells.lang') || 'en';

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://sells-server.herokuapp.com';
} else {
  axios.defaults.baseURL = `${window.location.hostname}:3000`;
}

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const myTransition = createSimpleTransition('fade-transition');

Vue.component('my-transition', myTransition);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
