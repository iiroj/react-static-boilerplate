import universal from 'react-universal-component';
import PropTypes from 'prop-types';

const options = {
  ignoreBabelRename: true,
  loadingTransition: false
};

const UniversalComponent = universal(({ src }) => src(), options);

UniversalComponent.propTypes = {
  src: PropTypes.func.isRequired
};

export default UniversalComponent;
