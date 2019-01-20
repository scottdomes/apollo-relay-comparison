import React from 'react';
import Contact from './Contact';

const ContactList = ({ edges = [] }) => {
  return edges.map(edge => {
    const contact = edge.node;
    return <Contact key={contact.id} contact={contact} />;
  });
};

export default ContactList;
