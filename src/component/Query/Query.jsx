import React, { useState } from 'react';
import axios from 'axios';

const Query = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // import axios from 'axios';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        message: 'Hello, I would like to inquire about your services.'
    };

    try {
      const response = await axios.post(
        'http://localhost/projecthey/backendphp/send_email.php', // Correct path
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        }
      
        );
        console.log(response.data); // Handle success
    } catch (error) {
        console.error('Error:', error); // Handle error
    }
};

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Query;
