import Vue from "vue";
import Vuex from "vuex";
import engineers from "./modules/engineers";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    engineers,
  },
});
