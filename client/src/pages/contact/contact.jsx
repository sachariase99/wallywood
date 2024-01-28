import React, { useState } from 'react';
import styles from './contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted with data:', formData);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <main className={styles.contact}>
      <h2>Kontakt os</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Dit navn: *</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Din email: *</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Din besked: *</label>
        <textarea name="message" cols="30" rows="10" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit">Send</button>
      </form>
    </main>
  );
};

export default Contact;
