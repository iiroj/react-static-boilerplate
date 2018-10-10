import FontFaceObserver from 'fontfaceobserver';
import * as React from 'react';

import '../styles/global';

const plex300 = new FontFaceObserver('IBM Plex Sans', { weight: 300 });
const plex600 = new FontFaceObserver('IBM Plex Sans', { weight: 600 });

type LayoutProps = {
  children: any;
};

export default class Layout extends React.Component<LayoutProps> {
  componentDidMount() {
    Promise.all([plex300.load(), plex600.load()]);
  }

  render = () => this.props.children;
}
