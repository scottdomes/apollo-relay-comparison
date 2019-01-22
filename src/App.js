import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ApolloMain from './apollo/Main';
import RelayMain from './relay/Main';

import './App.css';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/apollo" component={ApolloMain} />
        <Route path="/relay" component={RelayMain} />
      </React.Fragment>
    </Router>
  );
};

export default App;
