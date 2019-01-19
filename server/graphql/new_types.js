const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} = require('graphql');

export const PageInfo = new GraphQLObjectType({
  name: 'PageInfo',
  fields: {
    hasNextPage: {
      type: new GraphQLNonNull(GraphQLBoolean)
    },
    hasPreviousPage: {
      type: new GraphQLNonNull(GraphQLBoolean)
    }
  }
});

const Contact = new GraphQLObjectType({
  name: 'Contact',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
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
      type: GraphQLString
    },
    node: {
      type: Contact
    }
  })
});

const ContactConnection = new GraphQLObjectType({
  name: 'ContactConnection',
  fields: () => ({
    edges: {
      type: new GraphQLList(ContactEdge),
      resolve() {
        return [];
      }
    },
    pageInfo: {
      type: new GraphQLNonNull(PageInfo)
    }
  })
});

export const Viewer = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    allContacts: {
      type: ContactConnection,
      resolve() {
        return {};
      },
    },
  }),
});
