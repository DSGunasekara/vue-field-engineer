import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Jobs from "../views/Jobs";
import Engineers from "../views/Engineers";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/engineers",
    name: "Engineers",
    component: Engineers,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
