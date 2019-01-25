import React from 'react';
import Form from '../components/Form';
import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from './environment';
import updateLocalStore from './updateLocalStore';

const mutation = graphql`
  mutation MutationComponentMutation($input: ContactInput!) {
    createContact(input: $input) {
      contactEdge {
        node {
          id
          email
          name
        }
      }
    }
  }
`;

function commit(name, email, viewer) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        name,
        email
      }
    },
    updater: (store, data) => updateLocalStore(store, data, viewer)
  });
}

const MutationComponent = ({ viewer }) => {
  return (
    <Form
      onSubmit={(name, email) => {
        commit(name, email, viewer);
      }}
    />
  );
};

export default MutationComponent;
