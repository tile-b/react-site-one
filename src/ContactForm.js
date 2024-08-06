import React, { useState } from 'react';

function ContactForm({ onSubmit, language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    onSubmit(formData); // call the onSubmit function passed from props
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">{language === 'en' ? 'Name' : 'Ime'}:</label><br/>
        <input type="text" id="username" name="username" placeholder={language === 'en' ? 'Name' : 'Ime'} /><br/>
        <label htmlFor="email">E-mail:</label><br/>
        <input type="email" id="email" name="email" cols="40" placeholder={language === 'en' ? "Your mail" : 'Vaš mail'} /><br/>
        <label htmlFor="comments">{language === 'en' ? 'Message' : 'Poruka'}:</label><br/>
        <textarea id="comments" name="comments" rows="4" cols="40" placeholder={language === 'en' ? "Your message" : 'Vaš upit'}></textarea>
        <button className='button' type="submit">{language === 'en' ? 'Send' : 'Pošalji'}</button>
      </form>
    </div>
);
}

export default ContactForm;


