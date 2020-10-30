import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Jobs from "../views/Jobs";
import Engineers from "../views/Engineers";
import Login from "../views/Login";
import Register from "../views/Register";

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
    path: "/engineers",
    name: "engineers",
    component: Engineers,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requireVisitors: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
