import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';

import Navbar from '../src/Navbar';
import ProjectGrid from '../src/ProjectGrid';

function Projects() {
  return (
    <main>
        <CssBaseline />
        <Navbar />
        <ProjectGrid />
    </main>
  );
}

export default Projects;