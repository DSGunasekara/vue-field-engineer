import axios from "axios";

const state = {
  engineers: [],
};

const getters = {
  allEngineers: (state) => state.engineers,
};

const actions = {
  async fetchEngineers({ commit }) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("access_token")}`;
    const response = await axios.get("engineer");
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
