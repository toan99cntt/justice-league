import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteParams } from "vue-router";
import routes from "./router";

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
 
  // if (to.matched.some((r: MetaRouter) => !!r.meta.auth)) {
  //   return next({ name: "login" });
  // }

  // if (to.matched.some((r: MetaRouter) => !!r.meta.guess)) {
  //   return next({ name: "home" });
  // }

  return next();
});
