import React from 'react'

import Navbar from '../src/Navbar';
import Footer from '../src/Footer';

function Contact() {
  return (
    <div>
      <Navbar currentPage="contact" />
      <main>
          Contact Me
      </main>
      <Footer />
    </div>
  );
}

export default Contact;