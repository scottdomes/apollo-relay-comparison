import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation CreateContactMutation($input: ContactInput!) {
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

function sharedUpdater(store, viewer, newEdge) {
  const viewerProxy = store.get(viewer.id);
  const conn = ConnectionHandler.getConnection(
    viewerProxy,
    'Main_allContacts'
  );
  ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

function commit(environment, name, email, viewer) {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        name,
        email
      }
    },
    updater: (store, data) => {
      const payload = store.getRootField('createContact');
      const newEdge = payload.getLinkedRecord('contactEdge');
      sharedUpdater(store, viewer, newEdge);
    }
  });
}

export default { commit };
