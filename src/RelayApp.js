import React, { Component } from 'react';
import get from 'lodash/get';
import { QueryRenderer } from 'react-relay';
import environment from './relay/environment';
import graphql from 'babel-plugin-relay/macro';
import CreateContactMutation from './relay/mutations/CreateContactMutation';

import './App.css';

const GET_CONTACTS = graphql`
  query RelayAppQuery {
    viewer {
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
          console.log(props);
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }

          const contacts = get(props, 'viewer.allContacts.edges', []);
          return (
            <div>
              {contacts.map(edge => {
                const contact = edge.node;
                return (
                  <div key={contact.id}>
                    <p>Name: {contact.name}</p>
                    <p>Email: {contact.email}</p>
                  </div>
                );
              })}
              <form
                onSubmit={e => {
                  e.preventDefault();
                  CreateContactMutation.commit(
                    environment,
                    this.state.name,
                    this.state.email
                  );
                }}>
                <label>Name</label>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
                <label>Email</label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
                <button type="submit">Add Contact</button>
              </form>
            </div>
          );
        }}
      />
    );
  }
}

export default App;
