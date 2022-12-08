import { createRouter, createWebHistory } from "vue-router";

import { Home, About } from "../pages";

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
    },
  },
  {
    path: "/about",
    name: "About",
    components: {
      default: About,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
