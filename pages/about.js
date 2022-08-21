import React from 'react'

import { Avatar, Box, Container, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';

import Navbar from '../src/Navbar';
import Footer from '../src/Footer';
import PastEmployers from '../src/PastEmployers';
import Skills from '../src/Skills';
import Interests from '../src/Interests';


function About() {
  const theme = useTheme();
  const miguel_hanging = [
    '/static/images/Capstone-Group-Photo.jpg',
    '/static/images/UVEEC-Team-Photo.jpg',
  ]
  return (
    <div>
      <Navbar currentPage="about"/>
      <main>
        <Container maxWidth="md" className="p-12">
          <Paper className="p-12" elevation={15}>
          <Stack direction="row" spacing={8} justifyContent="center" alignContent="center" alignItems="center" width="100%">
            <Avatar className="text-center" alt="Miguel Manguerra" src="/static/images/miguel-thinking.webp" sx={{ width: 200, height: 200 }} />
            <div>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                gutterBottom
                >
                  Hi! I'm Miguel
              </Typography>
              <Typography
                component="p"
                variant="subtitle2"
                align="center"
                gutterBottom
                >
                  Fourth Year Computer Engineering Student
              </Typography>
            </div>
            
          </Stack>
          <Typography
            component="p"
            variant="p"
            align="center"
            className="text-xl p-12"
            gutterBottom
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Typography>
          </Paper>
        </Container>
        <Box
          sx={{
            bgcolor: theme.palette.secondary.light,
            pt: 8,
            pb: 6,
          }}>
            <Container maxWidth="lg" className="p-12">
            <Typography
                component="h2"
                variant="h2"
                className="text-white mb-10"
                align="center"
                gutterBottom
                >
                Clubs and Employers
              </Typography>
              <Grid container className="p-8" alignItems="center">
                <Grid key="employee-description" item xs={12} sm={6} md={6}>
                  <Typography
                  component="p"
                  variant="p"
                  className="text-white text-2xl"
                  align="center"
                  gutterBottom
                  >
                    Over the years I have had the opportunity to work on over a dozen great projects
                    and teams that have shaped me into the engineer I am today. From hardware to 
                    mechanical, I have had the blessing to widen my skills through these teams.
                  </Typography>
                </Grid>
                <Grid key="past-employers" item xs={12} sm={6} md={6}>
                  <PastEmployers width={250} showButton="true" />
                </Grid>

              </Grid>
              
              
            </Container>
        </Box>
        <Box
          sx={{
            bgcolor: theme.palette.primary.light,
            pt: 8,
            pb: 6,
          }}>
            <Container maxWidth="xl" className="p-12">
            <Typography
              component="h2"
              variant="h2"
              align="center"
              gutterBottom
              >
              Outside of the Office
            </Typography>
            
            <Interests />

            <Typography
            component="p"
            variant="p"
            align="center"
            gutterBottom
            >
            </Typography>
            </Container>
        </Box>
        <Box
          className="text-white bgPcb"
          sx={{
            pt: 8,
            pb: 6,
          }}>
            <Container maxWidth="xl" className="p-12">
              <Typography
                component="h2"
                variant="h2"
                align="center"
                className="mb-12"
                gutterBottom
                >
                Skills
              </Typography>
              <Skills /> 
            </Container>
        </Box>
      </main>
      <Footer />
    </div>
  );
}

export default About;