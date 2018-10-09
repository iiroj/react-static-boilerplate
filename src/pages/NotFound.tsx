import * as React from 'react';
import { css } from 'emotion';
import Head from 'react-helmet';

import Button from '../components/Button';

const h1 = css({
  fontSize: '3rem',
  marginBottom: '1rem'
});

const h2 = css({
  lineHeight: 1,
  marginBottom: '2rem'
});

const NotFound = () => (
  <>
    <Head>
      <title>404 — Not Found</title>
    </Head>
    <main>
      <h1 className={h1}>Not Found</h1>
      <h2 className={h2}>The request page does not exist.</h2>
      <Button to="/">Go Home</Button>
    </main>
  </>
);

export default NotFound;
