import { createRouter, createWebHistory } from "vue-router";
import RootLayout from "../layout/RootLayout.vue";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    component: RootLayout,
    children: [{ path: "", component: HomePage }],
  },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router