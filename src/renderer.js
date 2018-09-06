import '@babel/polyfill';

import React from 'react';
import { ServerLocation } from '@reach/router';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import Helmet from 'react-helmet';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { html } from 'common-tags';

import App from './components/App';

export default async ({ assets, filename, path, publicPath, stats }) => {
  const app = renderStylesToString(
    renderToString(
      <ServerLocation url={path}>
        <App />
      </ServerLocation>
    )
  );

  const helmet = Helmet.renderStatic();

  const { scripts } = flushChunks(stats, {
    before: ['runtime', 'vendor'],
    after: ['client'],
    chunkNames: flushChunkNames()
  });

  return html`
    <!DOCTYPE html>
    <html lang="en" ${helmet.htmlAttributes.toString()}>
      <head>
        <meta name="version" content="${stats.hash}" />
        <meta charSet="utf-8" />
        ${helmet.title.toString()}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${helmet.meta.toString()}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512.png" />
        ${helmet.link.toString()}
        <link rel="preconnect" href="https://fonts.gstatic.com">
        ${scripts.map(src => `<script type="text/javascript" src="/${src}" rel="subresource" defer></script>`)}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${app}</div>
      </body>
    </html>
  `;
};
