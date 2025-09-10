import React from "react";
import "./contact.css";
//import emailjs from "emailjs-com";
//import { useState } from "react";
function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="map-container">
        <iframe
          title="Google Map of Dehradun"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13793.358922892517!2d78.0321888!3d30.3164945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929a4b5b5b40b%3A0x6733f09d727d31f7!2sDehradun%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sin!4v1710912345678!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form
        className="contact-form"
        action="https://formsubmit.co/mauryabhai62@gmail.com"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
