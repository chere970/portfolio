import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <ContactForm />
    </div>
  );
}

export default Contact;