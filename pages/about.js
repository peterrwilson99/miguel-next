import React from 'react'

import Navbar from '../src/Navbar';
import Footer from '../src/Footer';

function About() {
  return (
    <div>
      <Navbar currentPage="about"/>
      <main>
          About Me
      </main>
      <Footer />
    </div>
  );
}

export default About;