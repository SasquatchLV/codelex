import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/random-jokes",
    name: "random-jokes",
    component: () => import("../views/JokesView.vue"),
  },
  {
    path: "/random-jokes/:id",
    name: "random-jokes-id",
    component: () => import("../views/SingleJokeView.vue"),
  },
  {
    path: "/namegen",
    name: "namegen",
    component: () => import("../views/NameGenView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
