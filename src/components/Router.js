import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UniversalComponent from './UniversalComponent';

const Router = () => (
  <Switch>
    <Route exact path="/" render={() => <UniversalComponent src={() => import('../pages/Home')} />} />
    <Route render={() => <UniversalComponent src={() => import('../pages/NotFound')} />} />
  </Switch>
);

export default Router;
