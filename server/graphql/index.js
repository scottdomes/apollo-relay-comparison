const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql');

const mutations = require('./mutations');
const queries = require('./queries');

console.log(mutations)
module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries
  }),
  // mutation: new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: mutations
  // })
});