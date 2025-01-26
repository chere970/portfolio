import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;