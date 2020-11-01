import axios from "axios";

const state = {
  engineers: [],
};

const getters = {
  allEngineers: (state) => state.engineers,
};

const actions = {
  fetchEngineers({ commit }) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("access_token")}`;
      axios
        .get("engineer")
        .then((response) => {
          commit("setEngineers", response.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
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
