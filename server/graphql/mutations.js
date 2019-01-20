import { GraphQLNonNull } from 'graphql';
import { Contact, ContactPayload } from './new_types';

const contactInputType = require('./types/contactInput');

const ContactModel = require('../models/contact');

module.exports = {
  createContact: {
    type: ContactPayload,
    args: {
      input: {
        name: 'input',
        type: new GraphQLNonNull(contactInputType)
      }
    },
    async resolve(root, params, { mongodb }) {
      console.log(params);
      const newContact = await mongodb
        .collection('contacts')
        .insert(params.input);
      console.log(newContact);
      if (!newContact) {
        throw new Error('Error adding new blog post');
      }
      return newContact;
    }
  }
};
