import React from 'react';
import '../contact/Contact.css';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zlx700r', 'template_wu7ml8q', form.current, 'JWG0QlFWNzwLKLPUi')
     e.target.reset();
  };

  return (
    <section id="contact" >
 <h5>Get In Touch</h5>
 <h2>Contact Me</h2>

 <div className="container contact__container">
  <div className="contact__options">

     {/* Contact option 1*/}
<article className="contact__option">
  <MdMarkEmailUnread className='contact__option-icon' />
  <h4>Email</h4>
  <h5>Hypend21@gmail.com</h5>
  <a href='mailto:hypend21@gmail.com' target="_blank">Send a message</a>
</article>

  {/* Contact option 2*/}
<article className="contact__option">
  <BsLinkedin className='contact__option-icon' />
  <h4>Linkedin</h4>
  <h5>Hypend21@gmail.com</h5>
  <a href='https://www.linkedin.com/in/dawayne-dacosta-b7053b230' target="_blank">Get intouch </a>
</article>

  {/* Contact option 3*/}
<article className="contact__option">
  <BsWhatsapp className='contact__option-icon' />
  <h4>WhatsApp</h4>
  <h5>Hypend21@gmail.com</h5>
  <a href='https://wa.me/14437684140' target="_blank">Send a message</a>
</article>
  </div>

    {/* END OF CONTACT OPTION*/}

  <form ref={form}  onSubmit={sendEmail} >
<input type="text"  name='name' placeholder='Your Full Name' required />
<input type="email" name='email' placeholder='Your Email' required />
<textarea name="message" rows="7" placeholder='Your Message' required></textarea>
<button type='submit' className='btn btn-primary' >Send Message</button>
  </form>
 </div>
  </section>
  )
}

export default Contact;
