export const HOME = () => import('./pages/Home');
export const NOT_FOUND = () => import('./pages/NotFound');

const routes: { [key: string]: () => Promise<any> } = {
  '/': HOME,
  '/404': NOT_FOUND
};

export default routes;
