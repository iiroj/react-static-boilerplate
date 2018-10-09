import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import routes, { NOT_FOUND } from '../routes';
import Layout from './Layout';
import UniversalComponent from './UniversalComponent';

interface State {
  loading: boolean;
  page: () => Promise<any>;
}

class App extends React.Component<RouteComponentProps, State> {
  static getDerivedStateFromProps(
    { location }: RouteComponentProps,
    state: State
  ) {
    const page = routes[location.pathname] || NOT_FOUND;
    return page === state.page
      ? null
      : { page: routes[location.pathname] || NOT_FOUND };
  }

  state = {
    loading: false,
    page: routes['/']
  };

  setLoading = () => this.setState({ loading: true });

  setNotLoading = () => this.setState({ loading: false });

  componentDidUpdate(prevProps: RouteComponentProps) {
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
