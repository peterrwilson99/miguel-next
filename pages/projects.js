import React from 'react'

import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ProjectGrid from '../src/components/ProjectGrid';
import FeaturedProject from '../src/components/FeaturedProject';
import projects from '../src/inputs/projects.json';

function Projects() {
  return (
    <div>
      <Navbar currentPage="projects" />
      <main>
          <FeaturedProject selected_project={projects[2]} />
          <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}

export default Projects;