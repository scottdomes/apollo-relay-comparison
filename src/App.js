import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';

import gql from 'graphql-tag';
import './App.css';

const GET_CONTACTS = gql`
  query contacts {
    contacts {
      name
      email
    }
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Query query={GET_CONTACTS}>
            {({ data, loading, error }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>ERROR</p>;

              return data.contacts.map(contact => {
                return (
                  <div>
                    <p>Name: {contact.name}</p>
                    <p>Email: {contact.email}</p>
                  </div>
                );
              });
            }}
          </Query>
          <button>Add Contact</button>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
