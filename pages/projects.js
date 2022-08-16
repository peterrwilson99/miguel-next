import React from 'react'

import Navbar from '../src/Navbar';
import Footer from '../src/Footer';
import ProjectGrid from '../src/ProjectGrid';

function Projects() {
  return (
    <div>
      <Navbar currentPage="projects" />
      <main>
          <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}

export default Projects;