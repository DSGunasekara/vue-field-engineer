import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requireAuth)) {
//     if (!store.getters.isLoggedIn) {
//       next({
//         path: "/login",
//       });
//     }
//   }
// });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
