import styled from 'styled-components';
import React from 'react';
import Head from 'react-helmet';

import Button from '../components/Button';

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 2rem;
`;

const Home = () => (
  <>
    <Head>
      <title>React Static Boilerplate</title>
    </Head>
    <main>
      <Title>React Static Boilerplate</Title>
      <Button href="https://gitlab.com/iiroj/react-static-boilerplate" target="_blank" rel="noopener noreferrer">
        GitLab
      </Button>
      <Button to="/404">See 404 page</Button>
    </main>
  </>
);

export default Home;
