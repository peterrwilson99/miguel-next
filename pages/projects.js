import React from 'react'

import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ProjectGrid from '../src/components/ProjectGrid';
import FeaturedProject from '../src/components/FeaturedProject';
import projects from '../src/inputs/projects.json';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

function Projects() {
  const theme = useTheme()
  return (
    <div>
      <Navbar currentPage="projects" />
      <main>
          <FeaturedProject selected_project={projects[2]} />
          <Box className="bgPcb text-white">
          <Container sx={{ py: 8 }} maxWidth="xl" className="pt-0">
            <Stack direction="row" justifyContent="center" alignItems="center" justifyItems="center" spacing={2} sx={{margin: "auto"}} className="py-12">
              <EngineeringIcon display={{ xs: "none", sm: "none", md: "block" }} sx={{width: 100, height: 100}} />
              <Typography
                variant="h2"
                component="h2"
                align="center"
                gutterBottom
                >
                Engineering Projects
              </Typography>
              
            </Stack>

            
            <ProjectGrid type="Professional" />
            </Container>
          </Box>
          <Box className=''
            sx={{
              bgcolor: theme.palette.primary.light,
            }}>
            <Container sx={{ py: 8 }} maxWidth="xl" className="pt-0">
              <Stack direction="row" justifyContent="center" alignItems="center" justifyItems="center" spacing={2} sx={{margin: "auto"}} className="py-12">
                <EmojiPeopleIcon sx={{width: 100, height: 100}} />
                <Typography
                  variant="h2"
                  component="h2"
                  align="center"
                  gutterBottom
                  >
                  Personal Projects
                </Typography>
                
              </Stack>

              <ProjectGrid type="Personal" className="mt-12"/>

            </Container>
          </Box>
          
      </main>
      <Footer />
    </div>
  );
}

export default Projects;