import '@babel/polyfill';
import Vue from 'vue';
import { createSimpleTransition } from 'vuetify/es5/util/helpers';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


Vue.config.productionTip = false;

const myTransition = createSimpleTransition('fade-transition');

Vue.component('my-transition', myTransition);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
