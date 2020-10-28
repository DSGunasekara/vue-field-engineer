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

// {
//     name: "Dilain Gunasekara",
//     location: "Galle, Sri Lanka",
//     rating: "4.1",
//     availability: "available",
//   },
//   {
//     name: "John Cena",
//     location: "Colombo, Sri Lanka",
//     rating: "4.1",
//     availability: "unavailable",
//   },
//   {
//     name: "Peter Parker",
//     location: "London, Sri Lanka",
//     rating: "3.1",
//     availability: "available",
//   },
//   {
//     name: "Tony Start",
//     location: "Kandy, Sri Lanka",
//     rating: "4.8",
//     availability: "unavailable",
//   },
//   {
//     name: "The Undertaker",
//     location: "DC, USA",
//     rating: "4.3",
//     availability: "available",
//   },
