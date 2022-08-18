import React from 'react'

import Navbar from '../src/Navbar';
import Footer from '../src/Footer';
import { Avatar, Box, Container, Paper, Stack, Typography, useTheme } from '@mui/material';
import PastEmployers from '../src/PastEmployers';



function About() {
  const theme = useTheme();
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
            <Container maxWidth="md" className="p-12">
            <Typography
                component="h2"
                variant="h3"
                className="text-white"
                gutterBottom
                >
                Hola, My skills r gud
              </Typography>
              <Typography
                component="p"
                variant="body1"
                className="text-white text-xl"
                >
                  Contrary to popular belief, Lorem Ipsum is not simply random text. 
                  It has roots in a piece of classical Latin literature from 45 BC, 
                  making it over 2000 years old. Richard McClintock, a Latin professor 
                  at Hampden-Sydney College in Virginia, looked up one of the more 
                  obscure Latin words, consectetur, from a Lorem Ipsum passage, and going 
                  through the cites of the word in classical literature, discovered the 
                  undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
                  of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                  written in 45 BC. This book is a treatise on the theory of ethics, very popular 
                  during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum 
                  dolor sit amet..", comes from a line in section 1.10.32. The standard chunk 
                  of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                  Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are 
                  also reproduced in their exact original form, accompanied by English versions from 
                  the 1914 translation by H. Rackham.
                </Typography>
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
              variant="h3"
              align="center"
              gutterBottom
              >
              Past Employers
            </Typography>
            <PastEmployers />
              
            </Container>
        </Box>
      </main>
      <Footer />
    </div>
  );
}

export default About;