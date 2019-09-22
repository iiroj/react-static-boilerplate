# React Static Boilerplate

[![version](https://img.shields.io/github/tag/iiroj/react-static-boilerplate.svg)](https://github.com/iiroj/react-static-boilerplate/releases)
[![dependencies](https://img.shields.io/david/iiroj/react-static-boilerplate.svg)](https://github.com/iiroj/react-static-boilerplate/blob/master/package.json)
[![devDependencies](https://img.shields.io/david/dev/iiroj/react-static-boilerplate.svg)](https://github.com/iiroj/react-static-boilerplate/blob/master/package.json)
[![license](https://img.shields.io/github/license/iiroj/react-static-boilerplate.svg)](https://github.com/iiroj/react-static-boilerplate/blob/master/LICENSE)

An example React static site with SSR and code-splitting.

----

This is a minimal working starter repo for a static site built with React, with SSR and code-splitting. There's even SSR when developing with `webpack-dev-server`

Feel free to clone/fork this repository and build upon it.

**Looking for a server-rendered version? Check out [react-universal-boilerplate](https://gitlab.com/iiroj/react-universal-boilerplate)**

## Technologies used

This project uses the latest and greatest for lazy-loading pages and code-splitting. You should read the listed packages' readmes to learn more:

* [react](https://github.com/facebook/react) — A JavaScript library for building user interfaces
* [react-router](https://github.com/ReactTraining/react-router) — routing of pages
* [@loadable/component](https://github.com/smooth-code/loadable-components) — code-splitting and lazy-loading
* [emotion](https://github.com/emotion-js/emotion) — styling (css-in-js)
* [react-helmet-async](https://github.com/staylor/react-helmet-async) — manipulating the `<head>` from React
* [@babel/babel](https://github.com/babel/babel) — transpiling ECMAscript
* [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env) — transpiling based on browser/node targets
* [webpack](https://github.com/webpack/webpack) — bundling the client-side code
* [html-renderer-webpack-plugin](https://gitlab.com/iiroj/html-renderer-webpack-plugin) — rendering static html files with webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server) — serving the development version
* [serve](https://github.com/zeit/serve) — serving the production build

## Developing

To start a local development server, run

```bash
npm run dev
```

and open http://127.0.0.1:3000/ in your browser of choise.

## Building and production mode

To build the application, run

```bash
npm run build
```

To take a look at and analyze the built bundles, run

```bash
npm run stats
```

To serve the production build with `serve`, run

```bash
npm start
```

and open http://127.0.0.1:5000/ in your browser of choise.
