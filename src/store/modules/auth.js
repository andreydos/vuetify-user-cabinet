import axios from 'axios';

function getSavedState(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

function saveState(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state));
}

function setDefaultAuthHeaders(state) {
  axios.defaults.headers.common.Authorization = state.currentUser
    ? state.currentUser.token
    : '';
}

export const state = {
  currentUser: getSavedState('auth.currentUser'),
};

export const mutations = {
  SET_CURRENT_USER(moduleState, newValue) {
    moduleState.currentUser = newValue;
    saveState('auth.currentUser', newValue);
    setDefaultAuthHeaders(state);
  },
};

export const getters = {
  // Whether the user is currently logged in.
  loggedIn(moduleState) {
    return !!moduleState.currentUser;
  },
};

export const actions = {
  // This is automatically run in `src/store.js` when the app
  // starts.
  init({ state, dispatch }) {
    setDefaultAuthHeaders(state);
    dispatch('validate');
  },

  logIn({ commit, dispatch, getters }, { username, password } = {}) {
    if (getters.loggedIn) return dispatch('validate');

    return axios.post('/api/login', { username, password })
      .then((response) => {
        const user = response.data;
        commit('SET_CURRENT_USER', user);
        return user;
      })
      .catch((e) => {
        console.log(e);
        commit('SET_CURRENT_USER', null);
      });
  },

  logOut({ commit }) {
    commit('SET_CURRENT_USER', null);
  },

  // Validates the current user's token and refreshes it
  // with new data from the API.
  validate({ commit, state }) {
    if (!state.currentUser) return Promise.resolve(null);

    return axios
      .get('/api/user')
      .then((response) => {
        const user = response.data;
        commit('SET_CURRENT_USER', user);
        return user;
      })
      .catch((error) => {
        if (error.response.status === 401
            || error.response.status === 404) {
          commit('SET_CURRENT_USER', null);
        }
        return null;
      });
  },
};
