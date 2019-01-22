import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from '../components/ContactList';
import QueryComponent from './QueryComponent';
import MutationComponent from './MutationComponent';

const Main = () => {
  return (
    <div className="Main">
      <Link to="/apollo" className="switch">
        Switch to Apollo
      </Link>
      <div className="container">
        <QueryComponent>
          {data => {
            return (
              <React.Fragment>
                <ContactList edges={data.viewer.allContacts.edges} />
                <MutationComponent viewer={data.viewer} />
              </React.Fragment>
            );
          }}
        </QueryComponent>
      </div>
    </div>
  );
};

export default Main;
