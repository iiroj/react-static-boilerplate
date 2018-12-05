// @jsx jsx

import { Global, css, jsx } from "@emotion/core";
import React from "react";
import reset from "react-style-reset/string";

export default () => (
  <Global
    styles={css`
      ${reset};

      @font-face {
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 300;
        src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"),
          url(https://fonts.gstatic.com/s/ibmplexsans/v3/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFsdP3pBms.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"),
          url(https://fonts.gstatic.com/s/ibmplexsans/v3/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIFsdP3pBms.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }

      html {
        height: 100%;
      }

      #root {
        align-items: center;
        background-image: linear-gradient(
          -153deg,
          rgb(45, 45, 45) 0%,
          rgb(0, 0, 0) 95%
        );
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100%;
        padding: 2rem;
        width: 100%;
      }

      body {
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 20px;
        font-weight: 300;
        height: 100%;
      }

      * {
        box-sizing: border-box;
        line-height: 2rem;
      }

      strong {
        font-weight: 600;
      }

      em {
        font-style: italic;
      }
    `}
  />
);
