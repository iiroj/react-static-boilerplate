import React from 'react';
import { injectGlobal } from 'emotion';
import reset from 'css-wipe/js';
import FontFaceObserver from 'fontfaceobserver';
import { Route, Switch } from 'react-router';

import { Home, NotFound } from '../pages';

const plex300 = new FontFaceObserver('IBM Plex Sans', { fontWeight: 300 });
const plex600 = new FontFaceObserver('IBM Plex Sans', { fontWeight: 600 });

export default class App extends React.Component {
  async componentDidMount() {
    await Promise.all([plex300.load(), plex600.load()]);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

injectGlobal(
  reset,
  {
    '@font-face': {
      fontFamily: 'IBM Plex Sans',
      fontStyle: 'normal',
      fontWeight: 300,
      src:
        'local("IBM Plex Sans Light"), local("IBMPlexSans-Light"), url(https://fonts.gstatic.com/s/ibmplexsans/v3/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFsdP3pBms.woff2) format("woff2")',
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
    }
  },
  {
    '@font-face': {
      fontFamily: 'IBM Plex Sans',
      fontStyle: 'normal',
      fontWeight: 600,
      src:
        'local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexsans/v3/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIFsdP3pBms.woff2) format("woff2")',
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
    }
  },
  {
    html: {
      height: '100%'
    },

    '#root': {
      alignItems: 'center',
      backgroundImage: 'linear-gradient(-153deg, rgb(45, 45, 45) 0%, rgb(0, 0, 0) 95%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '100%',
      padding: '2rem',
      width: '100%'
    },

    body: {
      fontFamily: '"IBM Plex Sans", sans-serif',
      fontSize: 20,
      fontWeight: 300,
      height: '100%',
      overflowX: 'hidden',
      overflowY: 'auto'
    },

    '*': {
      lineHeight: '2rem'
    },

    strong: {
      fontWeight: 600
    },

    em: {
      fontStyle: 'italic'
    }
  }
);
