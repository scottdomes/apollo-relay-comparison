const { GraphQLInputObjectType, GraphQLString, GraphQLID } = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'ContactInput',
  fields: {
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  }
});
