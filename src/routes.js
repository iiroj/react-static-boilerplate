export const HOME = () => import("./pages/Home");
export const NOT_FOUND = () => import("./pages/NotFound");

export default {
  "/": HOME,
  "/404": NOT_FOUND
};
