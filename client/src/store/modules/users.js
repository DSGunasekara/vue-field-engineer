import axios from "axios";

const state = {
  users: [],
};

const getters = {
  allErrors: (state) => state.errors,
};

const actions = {
  registerUser({ commit }, regUser) {
    return new Promise((resolve, reject) => {
      axios
        .post("user", {
          ...regUser,
        })
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

  login(credentials) {
    return new Promise((resolve, reject) => {
      console.log(credentials);
      axios
        .post("login", { ...credentials })
        .then((response) => {
          console.log(`Res ${response}`);
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(`Err ${error}`);
        });
    });
  },
};

const mutations = {
  regUser(user) {
    state.users.shift(user);
  },
  addError(err) {
    state.errors = err;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
