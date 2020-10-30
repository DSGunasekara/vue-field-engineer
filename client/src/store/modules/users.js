import axios from "axios";

const state = {
  token: localStorage.getItem("access_token") || null,
  profile: null,
};

const getters = {
  isLoggedIn(state) {
    return state.token !== null;
  },
  getProfile(state) {
    return state.profile;
  },
};

const actions = {
  registerUser(regUser) {
    return new Promise((resolve, reject) => {
      axios
        .post("user", { ...regUser })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  login({ commit, dispatch }, credentials) {
    return new Promise((resolve, reject) => {
      axios
        .post("login", { ...credentials })
        .then((response) => {
          const token = response.data;
          localStorage.setItem("access_token", token);
          commit("setToken", token);
          dispatch("getUser");
          resolve(response);
        })
        .catch((error) => {
          console.log(`Login error ${error}`);
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
  getUser({ commit }) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("access_token")}`;
      axios
        .get("login")
        .then((response) => {
          commit("setProfile", { ...response.data });
          resolve(response);
        })
        .catch((error) => {
          console.log(`Get user ${error}`);
          reject(error);
        });
    });
  },
};

const mutations = {
  setToken: (state, token) => (state.token = token),
  removeToken: () => (state.token = null),
  setProfile: (state, user) => (state.profile = user),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
