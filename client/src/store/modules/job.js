import axios from "axios";

const state = {
  jobs: [],
};

const getters = {
  allEngineers: (state) => state.engineers,
};

const actions = {
  fetchJobs({ commit }) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("access_token")}`;
      axios
        .get("jobs")
        .then((response) => {
          commit("setJobs", response.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  addJob({ commit }, job) {
    return new Promise((resolve, reject) => {
      axios
        .post("job", { ...job })
        .then((response) => {
          commit("addJob", response.data);
          resolve(response);
        })
        .catch((error) => {
          resolve(error);
        });
    });
  },
};

const mutations = {
  setJobs: (state, jobs) => (state.jobs = jobs),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
