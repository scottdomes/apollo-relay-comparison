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

export const Contact = new GraphQLObjectType({
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
    contactEdge: {
      type: ContactEdge
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
      type: new GraphQLNonNull(PageInfo)
    }
  })
});

export const Viewer = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    allContacts: {
      type: ContactConnection,
      resolve(parent, args, { mongodb }) {
        return {
          query: mongodb.collection('contacts')
        };
      }
    }
  })
});
