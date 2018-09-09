import universal from 'react-universal-component';

const options = { loadingTransition: false };

export const Home = universal(props => import('./Home'), options);
export const NotFound = universal(props => import('./NotFound'), options);
