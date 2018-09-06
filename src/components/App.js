import React from 'react';
import { injectGlobal } from 'react-emotion';
import reset from 'css-wipe/js';
import FontFaceObserver from 'fontfaceobserver';
import { Router } from '@reach/router';

import UniversalComponent from './UniversalComponent';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,300i,600,600i');

  ${reset};

  html {
    height: 100%;
  }

  #root {
    align-items: center;
    background-image: linear-gradient(-153deg, rgb(45, 45, 45) 0%, rgb(0, 0, 0) 95%);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
    padding: 2rem;
    width: 100%;
  }

  body {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 20px;
    font-weight: 300;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  * {
    line-height: 2rem;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }
`;

const plex = new FontFaceObserver('IBM Plex Sans');

export default class App extends React.PureComponent {
  componentDidMount() {
    plex.load();
  }

  render() {
    return (
      <Router>
        <UniversalComponent path="/" page="Home" />
        <UniversalComponent default page="NotFound" />
      </Router>
    );
  }
}
