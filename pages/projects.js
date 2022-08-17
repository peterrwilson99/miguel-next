import React from 'react'

import Navbar from '../src/Navbar';
import Footer from '../src/Footer';
import ProjectGrid from '../src/ProjectGrid';
import FeaturedProject from '../src/FeaturedProject';

function Projects() {
  return (
    <div>
      <Navbar currentPage="projects" />
      <main>
          <FeaturedProject />
          <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}

export default Projects;