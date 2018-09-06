import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'react-helmet';
import styled from 'react-emotion';

import Button from '../components/Button';

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1;
`;

const Container = styled.main`
  ${Title} {
    margin-bottom: 1rem;
  }

  ${Button} {
    margin: 1rem 1rem 0 0;
  }
`;

const Home = ({ page }) => (
  <Fragment>
    <Head>
      <title>React Static Boilerplate</title>
    </Head>
    <Container>
      <Title>React Static Boilerplate</Title>
      <Button href="https://gitlab.com/iiroj/react-static-boilerplate" target="_blank" rel="noopener noreferrer">
        GitLab
      </Button>
      <Button to="/404">See 404 page</Button>
    </Container>
  </Fragment>
);

Home.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired
};

export default Home;
