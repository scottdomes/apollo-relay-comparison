import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloMain from './apollo/Main';
import './App.css';

const App = () => {
  return (
    <Router>
      <Route path="/apollo" component={ApolloMain} />
    </Router>
  );
};

export default App;
