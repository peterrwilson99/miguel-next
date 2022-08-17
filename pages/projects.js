import React from 'react'

import Navbar from '../src/Navbar';
import Footer from '../src/Footer';
import ProjectGrid from '../src/ProjectGrid';
import FeaturedProject from '../src/FeaturedProject';
import projects from '../src/projects.json';

function Projects() {
  return (
    <div>
      <Navbar currentPage="projects" />
      <main>
          <FeaturedProject selected_project={projects[4]} />
          <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}

export default Projects;