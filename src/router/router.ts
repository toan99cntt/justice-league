import type { RouteRecordRaw } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import MenuLayout from "@/layouts/MenuLayout.vue";
import HomeView from '@/pages/HomeView.vue';
import Profile from '@/pages/Profile.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import Search from '@/pages/Search.vue';

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: MenuLayout,
        children: [
          { path: '/', name: "home", component: HomeView },
          { path: '/profile', name: "profile", component: Profile },
          { path: '/search', name: "search", component: Search },
        ]
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
