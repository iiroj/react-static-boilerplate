import universal from 'react-universal-component';

const options = {
  ignoreBabelRename: true,
  loadingTransition: false
};

const UniversalComponent = universal((props: { src: () => Promise<any>}) => props.src(), options);

export default UniversalComponent;
