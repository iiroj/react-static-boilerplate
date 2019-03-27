import { css } from "@emotion/core";
import React from "react";
import { Helmet } from "react-helmet-async";

import Button from "../components/Button";

const buttonContainer = css({
  "* + *": {
    marginLeft: "1rem"
  }
});

const Home = () => (
  <main>
    <Helmet>
      <title>React Static Boilerplate</title>
    </Helmet>

    <h1
      css={css({
        fontSize: "3rem",
        lineHeight: 1,
        marginBottom: "2rem"
      })}
    >
      React Static Boilerplate
    </h1>
    <div css={buttonContainer}>
      <Button
        href="https://github.com/iiroj/react-static-boilerplate"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Button>
      <Button to="/404">See 404 page</Button>
    </div>
  </main>
);

export default Home;
