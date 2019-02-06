import React from "react";
import { withRouter } from "react-router";

import routes, { NOT_FOUND } from "../routes";
import Layout from "./Layout";

class App extends React.Component {
  static getDerivedStateFromProps({ location }, state) {
    const page = routes[location.pathname] || NOT_FOUND;
    return page === state.page
      ? null
      : { page: routes[location.pathname] || NOT_FOUND };
  }

  state = {
    page: routes["/"]
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <Layout>
        <this.state.page />
      </Layout>
    );
  }
}

export default withRouter(App);
