import axios from "axios";

const state = {
  jobs: [],
  engineerJobs: []
};

const getters = {
  allJobs: (state) => state.jobs,
  getEngineerJobs: (state) => state.engineerJobs,
};

const actions = {
  fetchJobs({ commit }) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("access_token")}`;
      axios
        .get("job")
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
          commit("setJob", response.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  deleteJob({ commit, dispatch }, job) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("access_token")}`;

      axios
        .delete(`job/${job}`)
        .then((response) => {
          commit("removeJob", job);
          dispatch("fetchJobs");
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateJob({ dispatch }, job) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("access_token")}`;
      axios
        .patch(`job/${job.id}`, { ...job })
        .then((response) => {
          dispatch("fetchJobs");
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  acceptJob({ dispatch }, job){
    return new Promise((resolve, reject)=>{
      console.log(job)
      axios.defaults.headers.common[
          "Authorization"
          ] = `Bearer ${localStorage.getItem("access_token")}`;
      axios
          .patch(`job/addEngineer/${job.id}`, {...job})
          .then((response)=>{
            dispatch("fetchJobs")
            resolve(response)
          }).catch((error)=>{
            reject(error)
      })
    })
  },
  fetchEngineerJobList({ commit, state }){
    return new Promise((resolve, reject)=>{
      axios.defaults.headers.common[
          "Authorization"
          ] = `Bearer ${localStorage.getItem("access_token")}`;

      axios
          .get(`engineer/jobList/${state.profile._id}`)
          .then((response)=>{
            console.log(`hello ${response.data}`)
            commit("setEngineerJobList", response.data)
            response(response)
          }).catch((error)=>{
            reject(error)
      })
    })
  }
};

const mutations = {
  setJobs: (state, jobs) => (state.jobs = jobs),
  setJob: (state, job) => state.jobs.push(job),
  removeJob: (state, jobId) =>
    (state.jobs = state.jobs.filter((job) => job.id !== jobId)),
  setEngineerJobList: (state, jobList) => (state.engineerJobs = jobList)
};

export default {
  state,
  getters,
  actions,
  mutations,
};
