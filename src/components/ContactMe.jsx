import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import '../styles/ContactMePage.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [status, setStatus] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleCaptchaVerify = (token) => {
    setCaptchaToken(token);
  };

  const handleCaptchaRefresh = () => {
    setCaptchaToken('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setStatus('Please complete the CAPTCHA');
      return;
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        message: message,
        reply_to: email,
        'g-recaptcha-response': captchaToken
      },
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      handleCaptchaRefresh();
    }, (error) => {
      console.log('FAILED...', error);
      setStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="contact-page">
      <div className="sidebar1">
        <div className="contacts">
          <h3>contacts</h3>
          <p>Kaushikva44@gmail.com</p>
          <p>+91 6360586390</p>
        </div>
        <div className="find-me-also-in">
          <h3>find-me-also-in</h3>
          <ul>
            <li>YouTube</li>
            <li>Spotify</li>
            <li>Instagram</li>
            <li>Twitch.tv</li>
          </ul>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">_name:</label>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">_email:</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">_message:</label>
            <textarea 
              id="message" 
              rows="5" 
              value={message}
              onChange={handleMessageChange}
              required
            />
          </div>
          <div className="form-group">
            <HCaptcha
              sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
              onVerify={handleCaptchaVerify}
              theme="dark"
            />
          </div>
          <button type="submit" className="submit-btn">submit-message</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
      <div className="code-snippet">
    
          <div className="code-snippet-item">
            <pre>
              <code>{`const button = document.querySelector('#sendBtn');

const message = {
  name: "${name}",
  email: "${email}",
  message: "${message}",
  date: new Date().toLocaleDateString()
}

button.addEventListener('click', () => {
  form.send(message);
})`}</code>
            </pre>
          </div>
        </div>
      </div>
  );
};

export default ContactMe;
