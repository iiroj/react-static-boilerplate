import universal from 'react-universal-component';
import PropTypes from 'prop-types';

const options = { loadingTransition: false };

const UniversalComponent = universal(({ src }) => src(), options);

UniversalComponent.propTypes = {
  src: PropTypes.func.isRequired
};

export default UniversalComponent;
