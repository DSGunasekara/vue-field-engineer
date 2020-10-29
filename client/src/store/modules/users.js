import axios from "axios";

const state = {
  users: [],
  token: localStorage.getItem("access_token") || null,
};

const getters = {
  isLoggedIn(state) {
    return state.token !== null;
  },
};

const actions = {
  registerUser({ commit }, regUser) {
    return new Promise((resolve, reject) => {
      axios
        .post("user", { ...regUser })
        .then((response) => {
          console.log(response);
          commit("regUser", response.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  login({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      axios
        .post("login", { ...credentials })
        .then((response) => {
          console.log(`Res ${response.data}`);
          const token = response.data;
          localStorage.setItem("access_token", token);
          commit("setToken", token);
          resolve(response);
        })
        .catch((error) => {
          console.log(`Err ${error}`);
          reject(error);
        });
    });
  },
  logout({ commit }) {
    if (getters.isLoggedIn) {
      localStorage.removeItem("access_token");
      commit("removeToken");
    }
  },
};

const mutations = {
  regUser(user) {
    state.users.shift(user);
  },
  setToken(token) {
    state.token = token;
  },
  removeToken() {
    state.token = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
