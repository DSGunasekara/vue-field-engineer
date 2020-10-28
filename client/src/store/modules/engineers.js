import axios from "axios";

const state = {
  engineers: [],
};

const getters = {
  allEngineers: (state) => state.engineers,
};

const actions = {
  async fetchEngineers({ commit }) {
    const response = await axios.get("http://localhost:5000/api/engineer");
    commit("setEngineers", response.data);
  },
};

const mutations = {
  setEngineers: (state, engineers) => (state.engineers = engineers),
};

export default {
  state,
  getters,
  actions,
  mutations,
};