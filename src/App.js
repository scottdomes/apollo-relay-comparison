import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query, Mutation } from 'react-apollo';
import ContactList from './components/ContactList';
import CreateContactMutation from './apollo/CreateContactMutation';
import gql from 'graphql-tag';
import './App.css';

export const GET_CONTACTS = gql`
  query contacts {
    viewer {
      allContacts {
        edges {
          node {
            name
            email
            id
          }
        }
      }
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
            {({ data, loading, error, refetch }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>ERROR</p>;

              return (
                <div>
                  <ContactList edges={data.viewer.allContacts.edges} />
                  <CreateContactMutation />
                </div>
              );
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
