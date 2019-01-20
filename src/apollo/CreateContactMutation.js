import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Form from '../components/Form';

import { GET_CONTACTS } from '../App';

const CREATE_CONTACT = gql`
  mutation createContact($input: ContactInput!) {
    createContact(input: $input) {
      contactEdge {
        __typename
        node {
          id
          email
          name
        }
      }
    }
  }
`;

const sharedUpdater = (cache, { data: { createContact } }) => {
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
          edges: oldContacts.concat([createContact.contactEdge])
        }
      }
    }
  });
};

const CreateContactMutation = () => {
  return (
    <Mutation mutation={CREATE_CONTACT} update={sharedUpdater}>
      {(create, { data }) => (
        <Form
          onSubmit={(name, email) => {
            create({
              variables: {
                input: {
                  name,
                  email
                }
              }
            });
          }}
        />
      )}
    </Mutation>
  );
};

export default CreateContactMutation;
