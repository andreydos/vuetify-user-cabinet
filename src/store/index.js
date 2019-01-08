import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';
import axios from 'axios';

Vue.use(Vuex);

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://sells-server.herokuapp.com';
} else {
  axios.defaults.baseURL = `${window.location.hostname}:3000`;
}

const store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
});

// Automatically run the `init` action for every module,
// if one exists.
Object.keys(modules).forEach((moduleName) => {
  if (modules[moduleName].actions && modules[moduleName].actions.init) {
    store.dispatch(`${moduleName}/init`);
  }
});

export default store;
