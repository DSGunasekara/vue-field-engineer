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
        .post("http://localhost:5000/api/user", {
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
