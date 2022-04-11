import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import WorksView from "../views/WorksView.vue";
import WorkView from "../views/WorkView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          top: 0,
          // behavior: "smooth"
        });
      }, 0);
    });
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/works",
      name: "Works",
      component: WorksView,
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactView,
    },
    {
      path: "/work/:name",
      name: "Work",
      component: WorkView,
      props: true,
    },
  ],
});

export default router;
