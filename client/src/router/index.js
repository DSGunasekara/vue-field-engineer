import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Jobs from "../views/Jobs";
import Engineers from "../views/Engineers";
// import Login from "../views/Login";
// import Register from "../views/Register";
import Landing from "../views/Landing";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
  {
    path: "/landing",
    name: "landing",
    component: Landing,
    meta: {
      requireVisitors: true,
    },
  },
  {
    path: "/engineers",
    name: "engineers",
    component: Engineers,
    meta: {
      requireAuth: true,
    },
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: Login,
  //   meta: {
  //     requireVisitors: true,
  //   },
  // },
  // {
  //   path: "/register",
  //   name: "register",
  //   component: Register,
  //   meta: {
  //     requireVisitors: true,
  //   },
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
