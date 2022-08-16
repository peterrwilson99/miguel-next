import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Navbar from '/src/Navbar';
import Footer from '/src/Footer';

export default function Index() {
  return (
    <div>
        <CssBaseline />
        <Navbar />
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="md" className="p-12">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Welcome to my Portfolio!
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Thanks for taking the time to learn a little bit more about me! Here you can
                find my past projects, resume, and a little more information about who I am.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button onClick={() => window.open('/projects')} variant="contained">Projects</Button>
                <Button onClick={() => window.open('/files/resume.pdf')} variant="outlined">Resume</Button>
              </Stack>
            </Container>
          </Box>
          {/* End hero unit */}
        </main>
        <Footer />
    </div>
  );
}
