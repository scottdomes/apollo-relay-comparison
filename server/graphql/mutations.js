const { GraphQLNonNull } = require('graphql');

const contactInputType = require('./types/contactInput');
const contactType = require('./types/contact');

const ContactModel = require('../models/contact');

module.exports = {
  createContact: {
    type: contactType,
    args: {
      input: {
        name: 'input',
        type: new GraphQLNonNull(contactInputType)
      }
    },
    async resolve(root, params, options) {
      const contact = new ContactModel(params.input);
      const newContact = await contact.save();

      if (!newContact) {
        throw new Error('Error adding new blog post');
      }
      return contact;
    }
  }
};
