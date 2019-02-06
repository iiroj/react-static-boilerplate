import "@babel/polyfill";

import { loadableReady } from "@loadable/component";
import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

const render = App =>
  ReactDOM.hydrate(
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./components/App.js", () => {
    const { default: App } = require("./components/App");
    render(App);
  });
}

loadableReady(() => render(App));
