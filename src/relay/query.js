import graphql from 'babel-plugin-relay/macro';

export const GET_CONTACTS = graphql`
  query queryQuery {
    viewer {
      id
      allContacts(first: 1000) @connection(key: "Main_allContacts") {
        edges {
          node {
            id
            name
            email
          }
        }
      }
    }
  }
`;
