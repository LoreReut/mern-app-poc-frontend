import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/navigation/MainNavigation'

const App = () => {
  return <Router>
    <MainNavigation/>
    <main>
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/users" exact>
        <Link to={`/users`}><h2>Henlo</h2></Link>
      </Route>
      <Route path="/places/new" exact>
        <NewPlace />
      </Route>
      <Route path="/places/id" exact>
        
      </Route>
      <Redirect to="/"/>
    </Switch>
    </main>
  </Router>;
}

export default App;
