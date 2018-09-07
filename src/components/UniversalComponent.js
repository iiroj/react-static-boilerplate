import universal from 'react-universal-component';

export default universal(props => import(`../pages/${props.page}`), {
  loadingTransition: false
});
