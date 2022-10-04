import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: "main",
    component: () =>
    import(/* webpackChunkName: "main" */ "../views/Main.vue"),
  },
  {
    path: "/market",
    name: "market",
    component: () =>
      import(/* webpackChunkName: "market" */ "../views/SuperMarket.vue"),
  },
  {
    path: "/best-selling",
    name: "bestSelling",
    component: () =>
      import(/* webpackChunkName: "BestSelling" */ "../views/BestSelling.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
