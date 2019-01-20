import Cursor from './Cursor';
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';

export const PageInfo = new GraphQLObjectType({
  name: 'PageInfo',
  fields: {
    hasNextPage: {
      type: new GraphQLNonNull(GraphQLBoolean)
    },
    hasPreviousPage: {
      type: new GraphQLNonNull(GraphQLBoolean)
    },
    startCursor: {
      type: GraphQLString
    },
    endCursor: {
      type: GraphQLString
    }
  }
});

export const Contact = new GraphQLObjectType({
  name: 'Contact',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve(parent) {
        return parent._id.toString();
      }
    },
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    }
  }
});

const ContactEdge = new GraphQLObjectType({
  name: 'ContactEdge',
  fields: () => ({
    cursor: {
      type: Cursor,
      resolve(parent) {
        return {
          value: parent._id.toString()
        };
      }
    },
    node: {
      type: Contact,
      resolve(parent) {
        return parent;
      }
    }
  })
});

export const ContactPayload = new GraphQLObjectType({
  name: 'ContactPayload',
  fields: {
    contact: {
      type: Contact
    }
  }
});

const ContactConnection = new GraphQLObjectType({
  name: 'ContactConnection',
  fields: () => ({
    edges: {
      type: new GraphQLList(ContactEdge),
      resolve: async parent => {
        return await parent.query.find().toArray();
      }
    },
    pageInfo: {
      type: PageInfo
    }
  })
});

export function createConnectionArguments() {
  return {
    first: {
      type: GraphQLInt
    },
    last: {
      type: GraphQLInt
    }
  };
}

export const Viewer = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    allContacts: {
      type: ContactConnection,
      args: createConnectionArguments(),
      resolve(parent, args, { mongodb }) {
        return {
          query: mongodb.collection('contacts')
        };
      }
    }
  })
});
