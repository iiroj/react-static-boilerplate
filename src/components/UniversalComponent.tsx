import universal from 'react-universal-component';

const options = {
  ignoreBabelRename: true,
  loadingTransition: false
};

type Props = {
  src: () => Promise<React.ComponentClass>
}

const UniversalComponent = universal((props: Props) => props.src(), options);

export default UniversalComponent;
