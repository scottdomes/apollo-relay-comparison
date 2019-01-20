import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import get from 'lodash/get';
import { ApolloProvider, ApolloConsumer, Query, Mutation } from 'react-apollo';

import gql from 'graphql-tag';
import './App.css';

const GET_CONTACTS = gql`
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

const CREATE_CONTACT = gql`
  mutation createContact($input: ContactInput!) {
    createContact(input: $input) {
      contactEdge {
        __typename
        cursor
        node {
          id
          email
          name
        }
      }
    }
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
        <ApolloConsumer>
          {client => (
            <div className="App">
              <Query query={GET_CONTACTS}>
                {({ data, loading, error, refetch }) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>ERROR</p>;

                  const contacts = get(data, 'viewer.allContacts.edges', []);

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
                      <Mutation
                        mutation={CREATE_CONTACT}
                        update={(cache, { data: { createContact } }) => {
                          const oldContacts = cache.readQuery({
                            query: GET_CONTACTS
                          }).viewer.allContacts.edges;
                          cache.writeQuery({
                            query: GET_CONTACTS,
                            data: {
                              viewer: {
                                __typename: 'Viewer',
                                allContacts: {
                                  __typename: 'ContactConnection',
                                  edges: oldContacts.concat([
                                    createContact.contactEdge
                                  ])
                                }
                              }
                            }
                          });
                        }}>
                        {(create, { data }) => (
                          <form
                            onSubmit={e => {
                              e.preventDefault();
                              create({
                                variables: {
                                  input: {
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
                  );
                }}
              </Query>
            </div>
          )}
        </ApolloConsumer>
      </ApolloProvider>
    );
  }
}

export default App;
