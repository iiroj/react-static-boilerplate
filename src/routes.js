export const HOME = () => import("./views/Home");
export const NOT_FOUND = () => import("./views/NotFound");

export default {
  "/": HOME,
  "/404": NOT_FOUND
};
