import styled from 'styled-components';
import React from 'react';
import Head from 'react-helmet';

import Button from '../components/Button';

const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const H2 = styled.h2`
  line-height: 1;
  margin-bottom: 2rem;
`;

const NotFound = () => (
  <>
    <Head>
      <title>404 — Not Found</title>
    </Head>
    <main>
      <H1>Not Found</H1>
      <H2>The requested page does not exist.</H2>
      <Button to="/">Go Home</Button>
    </main>
  </>
);

export default NotFound;
