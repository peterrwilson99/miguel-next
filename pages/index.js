import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Carousel from "react-material-ui-carousel";
import { useTheme } from "@mui/material/styles";

import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import projects from "/src/inputs/projects.json";
import Image from "next/image";
import { CardMedia, Grid, Paper } from "@mui/material";
import FeaturedProject from "../src/components/FeaturedProject";

export default function Index() {
  const theme = useTheme();
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
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
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Thanks for taking the time to learn a little bit more about me!
              Here you can find my past projects and a little more information
              about who I am.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button href="/projects" variant="contained">
                Projects
              </Button>
              <Button
                onClick={() => window.open("/files/resume_new.pdf")}
                variant="outlined"
              >
                Resume
              </Button>
            </Stack>
          </Container>
        </Box>
        {/* End hero unit */}
        {/* About Me Hype Unit */}
        <Box
          sx={{
            bgcolor: theme.palette.secondary.light,
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg" className="p-12">
            <Paper elevation={15} className="p-12">
              <Grid container justifyContent="space-between">
                <Grid item xs={12} sm={12} md={6} className="p-8">
                  <Typography component="h3" variant="h4" gutterBottom>
                    Hi, I'm Miguel
                  </Typography>
                  <Typography component="p" variant="subtitle2" gutterBottom>
                    Fifth Year Computer Engineering Student
                  </Typography>
                  <Typography
                    component="p"
                    variant="p"
                    className="text-xl mb-10"
                    gutterBottom
                  >
                    Welcome to my portfolio, where I will try and give you
                    insight into who I am inside and out of the office. My
                    passion for computers started from a young age while
                    building PC's for gaming, and naturally progressed into
                    Computer Engineering. University opened a world of new
                    interesting projects and clubs that helped me find my
                    passion for 3D printers and electronics. Away from the desk,
                    I am a passionate soccer player, weightlifter, and cook.
                  </Typography>
                  <Button href="/about" color="secondary" variant="outlined">
                    About Me
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <CardMedia
                    component="img"
                    image="/static/images/miguel-thinking.webp"
                    alt=""
                    className="p-8"
                  />
                  {/* <Image src="/static/images/miguel-thinking.webp" alt="" width="100%" height="100%" layout="responsive" objectFit="contain"/> */}
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </Box>
        <Box
          sx={{
            bgcolor: theme.palette.primary.main,
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm" className="p-12">
            <Typography
              component="q"
              variant="caption"
              className="text-xl italic"
              align="center"
            >
              Without hesitation, I recommend Miguel Manguerra for employment in
              the electronic engineering field and have no doubts that he will
              contribute towards the success of the company he chooses to work
              with.
            </Typography>
            <Typography
              component="p"
              variant="p"
              className="text-xl p-8"
              align="center"
            >
              Sergio Perez
              <br /> CTO of Ergonomyx Technologies Canada
            </Typography>
          </Container>
        </Box>
        {/* End of About Me Hype Unit */}
        {/* Project overview section */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="xl" className="p-12">
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid item xs={12} sm={12} md={8}>
                <Carousel
                  navButtonsAlwaysVisible="true"
                  animation="slide"
                  interval={6000}
                  height={400}
                >
                  <FeaturedProject selected_project={projects[0]} />
                  <FeaturedProject selected_project={projects[1]} />
                  <FeaturedProject selected_project={projects[4]} />
                </Carousel>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                columnSpacing="center"
                justifyContent="center"
              >
                <Typography component="h3" variant="h4" gutterBottom>
                  Projects
                </Typography>
                <Typography
                  component="p"
                  variant="body1"
                  className="text-xl mb-10"
                  gutterBottom
                >
                  Some of my current projects include an open source
                  programmable load and a Voron 2.4 3D printer. My past
                  projects include a blood pressure emulator for testing medical
                  devices, a power distribution board to power an unmanned
                  surface water vehicle, and a battery tester jig to
                  automatically test batteries.
                </Typography>
                <Button href="/projects" color="primary" variant="contained">
                  Projects
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* End of Project overview section */}
      </main>
      <Footer />
    </div>
  );
}
