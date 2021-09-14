import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';

export default function Auth() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>
  );
}
