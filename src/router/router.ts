import type { RouteRecordRaw } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import HomeView from '@/pages/HomeView.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/register",
        name: "register",
        component: Register,
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("@/pages/ErrorPage404.vue"),
  },
];

export default routes;
