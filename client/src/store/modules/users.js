import axios from "axios";

const state = {
  users: [],
};

const getters = {};

const actions = {
  async registerUser({ commit }, regUser) {
    const response = await axios.post("http://localhost:5000/api/user", {
      ...regUser,
    });
    commit("regUser", response.data);
  },
};

const mutations = {
  regUser(user) {
    state.users.shift(user);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
