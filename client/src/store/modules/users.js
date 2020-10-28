import axios from "axios";

const state = {
  users: [],
};

const getters = {};

const actions = {
  async registerUser(user) {
    await axios.post("http://localhost:5000/api/user", {
      ...user,
    });
  },
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
