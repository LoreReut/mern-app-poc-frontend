import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
  {/*The route object represents referrable items with the to attribute within Link objects */}
  return <Router>
    <MainNavigation/>
    <main>
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/places/new" exact>
        <NewPlace />
      </Route>
      <Route path="/:uid/places" exact>
        <UserPlaces/>
      </Route>
      <Redirect to="/"/>
    </Switch>
    </main>
  </Router>;
}

export default App;
