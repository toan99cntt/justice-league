import type { RouteRecordRaw } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import MenuLayout from "@/layouts/MenuLayout.vue";
import Home from '@/pages/Home.vue';
import Explore from '@/pages/Explore.vue';
import Profile from '@/pages/Profile.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import Search from '@/pages/Search.vue';
import UserDetail from '@/pages/UserDetail.vue';

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: MenuLayout,
        children: [
          { path: '/', name: "home", component: Home },
          { path: '/explore', name: "explore", component: Explore },
          { path: '/profile', name: "profile", component: Profile, meta: { auth: true } },
          { path: '/search', name: "search", component: Search },
          { path: '/user-detail', name: "userDetail", component: UserDetail },
        ]
      },
      {
        path: "/login",
        name: "login",
        component: Login,
        meta: { guess: true },
      },
      {
        path: "/register",
        name: "register",
        component: Register,
        meta: { guess: true },
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("@/pages/ErrorPage404.vue"),
  },
];

export default routes;
