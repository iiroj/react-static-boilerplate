import loadable from "@loadable/component";

export const HOME = loadable(() => import("./views/Home"));
export const NOT_FOUND = loadable(() => import("./views/NotFound"));

export default {
  "/": HOME,
  "/404": NOT_FOUND
};
