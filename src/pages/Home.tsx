import React from 'react';
import Head from 'react-helmet';
import { css } from 'emotion';

import Button from '../components/Button';

const title = css({
  fontSize: '3rem',
  lineHeight: 1,
  marginBottom: '2rem'
});

const Home = () => (
  <>
    <Head>
      <title>React Static Boilerplate</title>
    </Head>
    <main>
      <h1 className={title}>React Static Boilerplate</h1>
      <Button href="https://gitlab.com/iiroj/react-static-boilerplate" target="_blank" rel="noopener noreferrer">
        GitLab
      </Button>
      <Button to="/404">See 404 page</Button>
    </main>
  </>
);

export default Home;
