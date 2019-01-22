import React from 'react';
import Contact from './Contact';

const ContactList = ({ edges = [] }) => {
  return (
    <div className="ContactList">
      {edges.map(edge => {
        const contact = edge.node;
        return <Contact key={contact.id} contact={contact} />;
      })}
    </div>
  );
};

export default ContactList;
