import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import ContactList from '../components/ContactList';
import CreateContactMutation from './CreateContactMutation';
import gql from 'graphql-tag';

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

const Main = () => {
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
};

export default Main;
