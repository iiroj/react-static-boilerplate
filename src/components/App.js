import React, { useEffect, useMemo } from "react";
import { withRouter } from "react-router";

import routes, { NOT_FOUND } from "../routes";
import Layout from "./Layout";

const App = ({ history, location }) => {
  useEffect(() => {
    if (history.action !== "POP") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location.key]);

  const Route = useMemo(() => routes[location.pathname] || NOT_FOUND, [
    location.pathname
  ]);

  return (
    <Layout>
      <Route />
    </Layout>
  );
};

export default withRouter(App);
