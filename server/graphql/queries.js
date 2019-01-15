const { GraphQLID, GraphQLNonNull, GraphQLList } = require('graphql');

const contactType = require('./types/contact');
const ContactModel = require('../models/contact');

module.exports = {
  contacts: {
    type: new GraphQLList(contactType),
    // args: {
    //   id: {
    //     name: 'id',
    //     type: new GraphQLNonNull(GraphQLID)
    //   }
    // },
    resolve(root, params) {
      return ContactModel.find()
        .select({ name: 1, email: 1 })
        .exec();
    }
  }
};
