import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import LandingPageVue from "./views/LandingPage.vue";
import ContactPage from "./views/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: LandingPageVue,
      path: "/",
    },
    {
      component: ContactPage,
      path: "/contact",
    },
  ],
});

createApp(App).use(router).mount("#app");
