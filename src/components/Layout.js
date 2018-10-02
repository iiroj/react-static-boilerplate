import FontFaceObserver from 'fontfaceobserver';
import PropTypes from 'prop-types';
import React from 'react';

import GlobalStyles from '../styles/global';

const plex300 = new FontFaceObserver('IBM Plex Sans', { weight: 300 });
const plex600 = new FontFaceObserver('IBM Plex Sans', { weight: 600 });

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  componentDidMount() {
    Promise.all([plex300.load(), plex600.load()]);
  }

  render = () => (
    <>
      <GlobalStyles />
      {this.props.children}
    </>
  );
}
