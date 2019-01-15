import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query, Mutation } from 'react-apollo';

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

const CREATE_CONTACT = gql`
  mutation createContact($data: ContactInput!) {
    createContact(data: $data)
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

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
          <Mutation mutation={CREATE_CONTACT}>
            {(create, { data }) => (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  create({
                    variables: {
                      data: {
                        name: this.state.name,
                        email: this.state.email
                      }
                    }
                  });
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
            )}
          </Mutation>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
