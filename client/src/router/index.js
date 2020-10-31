import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Jobs from "../views/Jobs";
import Engineers from "../views/Engineers";
import Landing from "../views/Landing";
import Profile from "../components/Profile";
// import UpdateUserDetails from "../components/UpdateUserDetails";
import UpdatePassword from "../components/UpdatePassword";

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
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/updateUserDetails",
    name: "updateUserDetails",
    component: UpdatePassword,
    meta: {
      requireAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
