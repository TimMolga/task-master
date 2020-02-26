import React from 'react';
import './App.css';
import Home from './components/home';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
