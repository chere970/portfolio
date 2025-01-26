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
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      {submitted ? (
        <p className="text-green-500">Thank you for your message!</p>
      ) : (
        <>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
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
              className="mt-1 p-2 w-full border rounded-md"
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
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </>
      )}
    </form>
  );
}

export default ContactForm;










// import React from 'react';

// function AboutSection() {
//   return (
//     <section className="bg-gray-100 p-8 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">About Me</h2>
//       <p className="text-gray-600">
//         I am a passionate and highly motivated web developer with a strong focus on building user-friendly and engaging web experiences. I have a solid foundation in HTML, CSS, JavaScript, and React. 
//         I am always eager to learn new technologies and improve my skills.
//       </p>
//       {/* Add your profile picture */}
//       <img 
//         src="your-profile-image.jpg" 
//         alt="Your Profile" 
//         className="rounded-full w-24 h-24 mx-auto mt-4" 
//       />
//     </section>
//   );
// }

// export default AboutSection;