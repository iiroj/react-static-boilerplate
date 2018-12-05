// @jsx jsx

import { css, jsx } from "@emotion/core";
import React from "react";
import Head from "react-helmet-async";
import { hot } from "react-hot-loader";

import Button from "../components/Button";

const Home = () => (
  <main>
    <Head>
      <title>React Static Boilerplate</title>
    </Head>

    <h1
      css={css({
        fontSize: "3rem",
        lineHeight: 1,
        marginBottom: "2rem"
      })}
    >
      React Static Boilerplate
    </h1>
    <Button
      href="https://gitlab.com/iiroj/react-static-boilerplate"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitLab
    </Button>
    <Button to="/404">See 404 page</Button>
  </main>
);

export default hot(module)(Home);
