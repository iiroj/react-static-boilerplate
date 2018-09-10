<div align="center">
  <img src="static/favicon_192.png" alt="React Static Boilerplate" width="64" height="64">
  <h1 align="center">React Static Boilerplate</h1>
  <p>An example React static site with SSR and code-splitting</p>
  <a href="https://gitlab.com/iiroj/react-static-boilerplate"><strong>GitLab</strong></a>
  <br/>
  <br/>
  <a href="https://gitlab.com/iiroj/react-static-boilerplate">
    <img src="https://img.shields.io/github/package-json/v/iiroj/react-static-boilerplate.svg?style=flat-square">
  </a>
  <a href="https://gitlab.com/iiroj/react-static-boilerplate">
    <img src="https://img.shields.io/github/languages/code-size/iiroj/react-static-boilerplate.svg?style=flat-square">
  </a>
  <a href="https://gitlab.com/iiroj/react-static-boilerplate/blob/master/package.json">
    <img src="https://img.shields.io/david/iiroj/react-static-boilerplate.svg?style=flat-square">
  </a>
  <a href="https://gitlab.com/iiroj/react-static-boilerplate/blob/master/package.json">
    <img src="https://img.shields.io/david/dev/iiroj/react-static-boilerplate.svg?style=flat-square">
  </a>
  <br/>
  <br/>
</div>

This is a minimal working example of a static site built with react, with SSR and code-splitting. There's even SSR when developing with `webpack-dev-server`

Feel free to clone/fork this repository and build upon it.

**Looking for a server-rendered version? Check out [react-universal-boilerplate](https://gitlab.com/iiroj/react-universal-boilerplate)**

## Technologies used

This project uses the latest and greatest for lazy-loading pages and code-splitting. You should read the listed packages' readmes to learn more:

* [react](https://github.com/facebook/react) — the basis
* [react-router](https://github.com/ReactTraining/react-router) — routing of pages
* [react-universal-component](https://github.com/faceyspacey/react-universal-component) — code-splitting and lazy-loading
* [emotion](https://github.com/emotion-js/emotion) — styling (css-in-js)
* [react-helmet](https://github.com/nfl/react-helmet) — manipulating the `<head>` from React
* [webpack-flush-chunks](https://github.com/faceyspacey/webpack-flush-chunks) — deciding which bundles to include on which pages
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

To serve the production build with `serve`, run

```bash
npm start
```

and open http://127.0.0.1:5000/ in your browser of choise.
