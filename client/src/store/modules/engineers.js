import axios from "axios";

const state = {
  engineers: [],
};

const getters = {
  allEngineers: (state) => state.engineers,
};

const actions = {
  async fetchEngineers({ commit }) {
    const response = await axios.get("engineer", {
      headers: {
        "x-access-token":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY5OTY0Y2MyMDU5OWY1MTc3OWE2NDA5Iiwicm9sZSI6IkVuZ2luZWVyIn0sImlhdCI6MTYwNDAzMzg0MSwiZXhwIjoxNjA0MzkzODQxfQ.-TDAMYMzoTK5oqjyL4rvev0qqovoTbXjDZAQRIKZWN0",
      },
    });
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
