import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import CreatePerson from './components/CreatePerson.js';
import Persons from './components/Persons.js';

import './App.css';

const client = new ApolloClient({
  uri: process.env.GRAPHQL_PATH || 'http://localhost:4000',
});

const history = createBrowserHistory();

const App = () => (
  <ApolloProvider client={client}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={CreatePerson} />
        <Route path="/persons" component={Persons} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
