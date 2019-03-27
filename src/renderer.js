import "core-js";

import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { html } from "common-tags";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router";

export default function renderer({ compilationAssets, path, stats }) {
  const extractor = new ChunkExtractor({
    entrypoints: ["client"],
    stats: JSON.parse(compilationAssets["loadable-stats.json"].source())
  });
  const helmetContext = {};
  const { default: App } = require("./components/App");

  const app = ReactDOMServer.renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <StaticRouter location={path} context={{}}>
        <HelmetProvider context={helmetContext}>
          <App />
        </HelmetProvider>
      </StaticRouter>
    </ChunkExtractorManager>
  );

  const { helmet } = helmetContext;

  /* eslint-disable prettier/prettier */
  return html`
    <!DOCTYPE html>
    <html lang="en" ${helmet.htmlAttributes.toString()}>
      <head>
        <meta name="version" content="${stats.hash}" />
        <meta charset="utf-8" />
        ${helmet.title.toString()}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${helmet.meta.toString()}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512.png" />
        ${helmet.link.toString()}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        ${extractor.getScriptTags().replace(/async/g, "defer")}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${app}</div>
      </body>
    </html>
  `.replace(/^\s*$(?:\r\n?|\n)/gm, "");
}
