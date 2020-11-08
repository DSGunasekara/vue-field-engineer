import axios from "axios";

const state = {
  jobs: [],
    engineerJobList: []
};

const getters = {
  allJobs: (state) => state.jobs,
  allEngineerJobList: (state)=> state.engineerJobList,
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
  fetchEngineerJobList({ commit }, userId){
    return new Promise((resolve, reject)=>{
        console.log(`id ${userId}`)
      axios.defaults.headers.common[
          "Authorization"
          ] = `Bearer ${localStorage.getItem("access_token")}`;
      axios.get(`engineer/jobList/${userId}`)
          .then((response)=>{
              console.log(response)
            commit("EngineerJobList", response.data)
            resolve(response)
          })
          .catch((err)=>{
            console.log(err)
            reject(err)
          })
    })
  }
};

const mutations = {
  setJobs: (state, jobs) => (state.jobs = jobs),
  setJob: (state, job) => state.jobs.push(job),
  removeJob: (state, jobId) =>
    (state.jobs = state.jobs.filter((job) => job.id !== jobId)),
  EngineerJobList: (state, jobList) => state.engineerJobList = jobList
};

export default {
  state,
  getters,
  actions,
  mutations,
};
