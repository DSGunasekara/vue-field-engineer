import axios from "axios";

const state = {
  token: localStorage.getItem("access_token") || null,
  profile: null,
  user: null,
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
  getUser({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("access_token")}`;
      axios
        .get("login")
        .then((response) => {
          commit("setUser", { ...response.data });
          dispatch("getProfile", response.data.id);
          resolve(response);
        })
        .catch((error) => {
          console.log(`Get user ${error}`);
          reject(error);
        });
    });
  },
  getProfile({ commit }, userId) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("access_token")}`;

      axios
        .get(`/user/${userId}`)
        .then((response) => {
          commit("setProfile", { ...response.data });
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

const mutations = {
  setToken: (state, token) => (state.token = token),
  removeToken: () => (state.token = null),
  setUser: (state, user) => (state.user = user),
  setProfile: (state, profile) => (state.profile = profile),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
