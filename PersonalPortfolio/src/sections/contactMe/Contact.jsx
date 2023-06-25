import { useState } from 'react';
import './contact.scss'

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (



    <div className='contact-me' id='contact'>
      <div className="left">
        <img src="assets/contact.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me !</h2>
        <form

          onClick={handleSubmit}
        >
          <img src="assets/connect.svg" alt="" />
          <input type="text" placeholder='Your Good Name' />
          <input type="Email" placeholder='Email' />
          <textarea placeholder='Contact regarding....' />
          <button type='submit'>Send</button>
          {message && <><span>Getting to know each other is first step.
          </span><h3>Thanks, I'll connect with you soon ASAP :)</h3></>}
        </form>

      </div>
    </div>

  )
}
