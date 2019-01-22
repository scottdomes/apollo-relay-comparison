import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import { GET_CONTACTS } from './query';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

const QueryComponent = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <Query query={GET_CONTACTS}>
        {({ data, loading, error }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (loading) {
            return <div>Loading...</div>;
          }

          console.log(data)

          return children(data);
        }}
      </Query>
    </ApolloProvider>
  );
};

export default QueryComponent;
