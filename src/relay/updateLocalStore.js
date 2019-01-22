import { ConnectionHandler } from 'relay-runtime';

const sharedUpdater = (store, viewer, newEdge) => {
  const viewerProxy = store.get(viewer.id);
  const conn = ConnectionHandler.getConnection(viewerProxy, 'Main_allContacts');
  ConnectionHandler.insertEdgeAfter(conn, newEdge);
};

const updateLocalStore = (store, data, viewer) => {
  const payload = store.getRootField('createContact');
  const newEdge = payload.getLinkedRecord('contactEdge');
  sharedUpdater(store, viewer, newEdge);
};

export default updateLocalStore;
