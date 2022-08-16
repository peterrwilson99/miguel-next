import React from 'react'

import Navbar from '../src/Navbar';
import Footer from '../src/Footer';
import ProjectGrid from '../src/ProjectGrid';

function Projects() {
  return (
    <div>
      <Navbar />
      <main>
          <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}

export default Projects;