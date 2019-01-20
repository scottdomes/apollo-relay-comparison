import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation CreateContactMutation($input: ContactInput!) {
    createContact(input: $input) {
      contact {
        id
        email
        name
      }
    }
  }
`;

function sharedUpdater(store, newEdge) {
  console.log(store, newEdge);
  const conn = ConnectionHandler.getConnection(store, 'RelayApp_allContacts');
  ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

function commit(environment, name, email) {
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
      const newEdge = payload.getLinkedRecord('contact');
      sharedUpdater(store, newEdge);
    }
  });
}

export default { commit };
