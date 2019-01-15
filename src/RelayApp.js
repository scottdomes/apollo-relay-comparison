import React, { Component } from 'react';
import { QueryRenderer } from 'react-relay';
import environment from './relay/environment';
import graphql from 'babel-plugin-relay/macro';

import './App.css';

const GET_CONTACTS = graphql`
  query RelayAppQuery {
    contacts {
      name
      email
    }
  }
`;

const CREATE_CONTACT = graphql`
  mutation RelayAppMutation($input: ContactInput!) {
    createContact(input: $input) {
      contact {
        name
        email
      }
    }
  }
`;

class App extends Component {
  state = { name: '', email: '' };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={GET_CONTACTS}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>User ID: {props.viewer.id}</div>;
        }}
      />
    );
  }
}

export default App;
