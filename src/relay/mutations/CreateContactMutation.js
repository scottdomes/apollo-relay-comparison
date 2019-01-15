import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const mutation = graphql`
  mutation CreateContactMutation($input: ContactInput!) {
    createContact(input: $input) {
      name
      email
    }
  }
`;

function commit(environment, name, email) {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { name, email }
    }
  });
}

export default { commit };
