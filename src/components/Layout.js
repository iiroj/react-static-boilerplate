import FontFaceObserver from "fontfaceobserver";
import * as React from "react";

import "../styles/global";

const plex300 = new FontFaceObserver("IBM Plex Sans", { weight: 300 });
const plex600 = new FontFaceObserver("IBM Plex Sans", { weight: 600 });

export default class Layout extends React.Component {
  componentDidMount() {
    Promise.all([plex300.load(), plex600.load()]).catch();
  }

  render = () => this.props.children;
}