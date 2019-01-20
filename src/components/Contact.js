import React from 'react';

const Contact = ({ contact }) => {
  return (
    <div>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
};

export default Contact;
