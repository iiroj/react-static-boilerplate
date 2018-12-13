import React from "react";
import { withRouter } from "react-router";

import routes, { NOT_FOUND } from "../routes";
import Layout from "./Layout";
import UniversalComponent from "./UniversalComponent";

class App extends React.Component {
  static getDerivedStateFromProps({ location }, state) {
    const page = routes[location.pathname] || NOT_FOUND;
    return page === state.page
      ? null
      : { page: routes[location.pathname] || NOT_FOUND };
  }

  state = {
    loading: false,
    page: routes["/"]
  };

  setLoading = () => this.setState({ loading: true });

  setNotLoading = () => this.setState({ loading: false });

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { page } = this.state;

    return (
      <Layout>
        <UniversalComponent
          onBefore={this.setLoading}
          onAfter={this.setNotLoading}
          src={page}
        />
      </Layout>
    );
  }
}

export default withRouter(App);
