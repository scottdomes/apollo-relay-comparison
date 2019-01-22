import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from './environment';
import { GET_CONTACTS } from './query';

const QueryComponent = ({ children }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={GET_CONTACTS}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }

        return children(props);
      }}
    />
  );
};

export default QueryComponent;
