import universal from 'react-universal-component';

const UniversalComponent = universal(props => import(`../pages/${props.page}`), {
  loadingTransition: false
});

export default UniversalComponent;
