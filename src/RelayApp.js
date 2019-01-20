import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from './relay/environment';
import graphql from 'babel-plugin-relay/macro';
import CreateContactMutation from './relay/mutations/CreateContactMutation';
import ContactList from './components/ContactList';
import Form from './components/Form';
import './App.css';

const GET_CONTACTS = graphql`
  query RelayAppQuery {
    viewer {
      id
      allContacts(first: 1000) @connection(key: "RelayApp_allContacts") {
        edges {
          node {
            id
            name
            email
          }
        }
      }
    }
  }
`;

const App = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={GET_CONTACTS}
      variables={{}}
      render={({ error, data }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!data) {
          return <div>Loading...</div>;
        }

        return (
          <div>
            <ContactList edges={data.viewer.allContacts.edges} />
            <Form
              onSubmit={(name, email) => {
                CreateContactMutation.commit(
                  environment,
                  name,
                  email,
                  data.viewer
                );
              }}
            />
          </div>
        );
      }}
    />
  );
};

export default App;
