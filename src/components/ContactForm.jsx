import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

    if (message.length > 500) {
      alert('Message length should not exceed 500 characters.');
      return;
    }

    // Send form data (replace with actual API call)
    console.log('Form submitted:', { name, email, message });

    // Reset form and display success message
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
    alert('Thank you for your message!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <h1 className="text-4xl mt-6 mb-7 text-black font-bold mb-4">Contact Me</h1>
      <div className='bg-gray-100 p-8 mx-200 rounded-lg shadow-md'>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 text-black w-full border border-black rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border-black text-black w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 text-black border-black p-2 w-full border rounded-md"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;










