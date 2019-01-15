const { GraphQLNonNull, GraphQLBoolean } = require('graphql');

const contactInputType = require('./types/contactInput');
console.log(contactInputType)
const ContactModel = require('../models/contact');

module.exports = {
  createContact: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(contactInputType)
      }
    },
    async resolve(root, params, options) {
      const contact = new ContactModel(params.data);
      const newContact = await contact.save();

      if (!newContact) {
        throw new Error('Error adding new blog post');
      }
      return true;
    }
  }
};
