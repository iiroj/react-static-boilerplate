// @jsx jsx

import { css, jsx } from "@emotion/core";
import React from "react";
import Head from "react-helmet-async";
import { hot } from "react-hot-loader";

import Button from "../components/Button";

const NotFound = () => (
  <main>
    <Head>
      <title>404 — Not Found</title>
    </Head>

    <h1
      css={css({
        fontSize: "3rem",
        marginBottom: "1rem"
      })}
    >
      Not Found
    </h1>
    <h2
      css={css({
        lineHeight: 1,
        marginBottom: "2rem"
      })}
    >
      The request page does not exist.
    </h2>
    <Button to="/">Go Home</Button>
  </main>
);

export default hot(module)(NotFound);
