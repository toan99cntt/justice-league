import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteParams } from "vue-router";
import routes from "./router";
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";
import { useAuth } from "@/services/domains/auth/useAuth";

export type MetaRouter = {
  meta: {
    auth?: boolean;
    guess?: boolean;
  };
};

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function routerPush(
  name: string,
  params?: RouteParams
): ReturnType<typeof router.push> {
  if (params !== undefined) {
    return router.push({
      name,
      params,
    });
  } else {
    return router.push({ name });
  }
}

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const {isAuthenticated, userProfile} = storeToRefs(authStore);
  await useAuth().authCheck();

  if (to.matched.some((r: MetaRouter) => !!r.meta.auth) && !isAuthenticated.value) {
    return next({name: 'login'});
  }
  else if (isAuthenticated.value) {
    if(!Object.keys(userProfile.value).length) await useAuth().getUserInfo();

    if(to.matched.some((r: MetaRouter) => !!r.meta.guess)) return next({name: 'home'});
  }

  return next();
});
