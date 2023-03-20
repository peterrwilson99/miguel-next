import React from 'react'

import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ContactForm from '../src/components/ContactForm';
import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';

function Contact() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Navbar currentPage="contact" />
      <main>
        <Container maxWidth="md" className={isSmallScreen ? "p-4 mt-12" : "p-12"}>
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