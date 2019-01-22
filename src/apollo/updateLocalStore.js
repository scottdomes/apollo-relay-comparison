import { GET_CONTACTS } from './query';

const updateLocalStore = (cache, { data: { createContact } }) => {
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

export default updateLocalStore;
