const { GraphQLID, GraphQLNonNull } = require('graphql');

const userType = require('./types/user');
const UserModel = require('../models/user');

module.exports = {
  user: {
    type: userType,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve(root, params) {
      return UserModel.findOne({ username: 'scotty' })
        .select({ username: 1, email: 1 })
        .exec();
    }
  }
};
