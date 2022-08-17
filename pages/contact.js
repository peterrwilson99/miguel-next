import React from 'react'

import Navbar from '../src/Navbar';
import Footer from '../src/Footer';
import ContactForm from '../src/ContactForm';
import { Container, Typography } from '@mui/material';

function Contact() {
  return (
    <div>
      <Navbar currentPage="contact" />
      <main>
        <Container maxWidth="md" className="p-12">
          <Typography 
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom >
              Send me an email!
            </Typography>
          <Typography 
            component="p"
            className="text-xl"
            align="center"
            color="text.primary" >
              Feel free to send me an email, along with your email so I can get back to you. Looking forward to hearing from you 😀 
            </Typography>
          
          <ContactForm />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;