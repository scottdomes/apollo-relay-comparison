import gql from 'graphql-tag';

export const GET_CONTACTS = gql`
  query contacts {
    viewer {
      allContacts {
        edges {
          node {
            name
            email
            id
          }
        }
      }
    }
  }
`;
