import Vue from "vue";
import Vuex from "vuex";
import engineers from "./modules/engineers";
import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    engineers,
    users,
  },
});
