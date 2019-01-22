import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from '../components/ContactList';
import MutationComponent from './MutationComponent';
import QueryComponent from './QueryComponent';

const Main = () => {
  return (
    <div className="Main">
      <Link to="/relay" className="switch">
        Switch to Relay
      </Link>
      <div className="container">
        <QueryComponent>
          {data => {
            return (
              <React.Fragment>
                <ContactList edges={data.viewer.allContacts.edges} />
                <MutationComponent />
              </React.Fragment>
            );
          }}
        </QueryComponent>
      </div>
    </div>
  );
};

export default Main;
