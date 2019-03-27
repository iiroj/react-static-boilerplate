import { css } from "@emotion/core";
import React from "react";
import { Helmet } from "react-helmet-async";

import Button from "../components/Button";

const NotFound = () => (
  <main>
    <Helmet>
      <title>404 — Not Found</title>
    </Helmet>

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

export default NotFound;
