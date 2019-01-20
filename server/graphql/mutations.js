import { GraphQLNonNull } from 'graphql';
import { ContactPayload } from './new_types';
import contactInputType from './types/contactInput';

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
      const result = await mongodb.collection('contacts').insert(params.input);
      const newContact = result.ops[0];

      if (!newContact) {
        throw new Error('Error adding new blog post');
      }
      return { contact: newContact };
    }
  }
};
