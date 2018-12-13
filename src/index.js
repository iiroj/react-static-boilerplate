import "@babel/polyfill";

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

render(App);

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./components/App.js", () => {
    const App = require("./components/App").default;
    render(App);
  });
}
