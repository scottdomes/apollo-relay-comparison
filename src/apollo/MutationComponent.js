import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Form from '../components/Form';
import updateLocalStore from './updateLocalStore';

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

const MutationComponent = () => {
  return (
    <Mutation mutation={CREATE_CONTACT} update={updateLocalStore}>
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

export default MutationComponent;
