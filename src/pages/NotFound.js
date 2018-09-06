import React, { Fragment } from 'react';
import styled from 'react-emotion';
import Head from 'react-helmet';

import Button from '../components/Button';

const Container = styled.main`
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h2 {
    line-height: 1;
    margin-bottom: 2rem;
  }
`;

const NotFound = () => (
  <Fragment>
    <Head>
      <title>404 — Not Found</title>
    </Head>
    <Container>
      <h1>Not Found</h1>
      <h2>The request page does not exist.</h2>
      <Button to="/">Go Home</Button>
    </Container>
  </Fragment>
);

export default NotFound;
