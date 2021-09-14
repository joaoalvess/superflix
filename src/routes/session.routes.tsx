import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

export default function Session() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
}
