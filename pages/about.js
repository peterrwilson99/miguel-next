import React from "react";

import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import PastEmployers from "../src/components/PastEmployers";
import Skills from "../src/components/Skills";
import Interests from "../src/components/Interests";

function About() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const miguel_hanging = [
    "/static/images/Capstone-Group-Photo.jpg",
    "/static/images/UVEEC-Team-Photo.jpg",
  ];
  return (
    <div>
      <Navbar currentPage="about" />
      <main>
        <Container
          maxWidth="md"
          className={isSmallScreen ? "p-4 my-12" : "p-12"}
        >
          <Paper className={isSmallScreen ? "p-2" : "p-8"} elevation={15}>
            <Grid
              container
              spacing={3}
              direction="row"
              width="100%"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              sx={{ margin: "auto" }}
            >
              <Grid item xs={12} sm={12} md={4}>
                <Avatar
                  className="text-center"
                  alt="Miguel Manguerra"
                  src="/static/images/miguel-avatar.jpg"
                  sx={{ width: 200, height: 200, margin: "auto" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
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
                  Fifth Year Computer Engineering Student
                </Typography>
              </Grid>
            </Grid>
            <Typography
              component="p"
              variant="p"
              align="center"
              className={isSmallScreen ? "p-4" : "text-xl p-12"}
              gutterBottom
            >
              A computer engineering graduate with extensive
              electronics product development experience. In his most recent
              co-op with Starfish Medical, he was exposed to the rigorous
              product development process necessary in medical applications. By
              leading a team at Ergonomyx technologies, he developed a soon to
              be released IoT office equipment product. He is currently working
              with Salyx Medical to develop their
              IoT vitals tracker that monitors five crucial health factors of
              the user. Miguel has a passion for electronics and technology,
              especially 3D printing, PCB design, and PC building. In his free
              time, Miguel is an avid weightlifter, enthusiastic soccer player,
              and loves to play competitive video games.
            </Typography>
          </Paper>
        </Container>
        <Box
          sx={{
            bgcolor: theme.palette.secondary.light,
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg" className={isSmallScreen ? "p-4" : "p-12"}>
            <Typography
              component="h2"
              variant="h2"
              className="text-white mb-10"
              align="center"
              gutterBottom
            >
              Clubs and Employers
            </Typography>
            <Grid
              container
              className={isSmallScreen ? "p-2" : "p-8"}
              alignItems="center"
            >
              <Grid key="employee-description" item xs={12} sm={6} md={6}>
                <Typography
                  component="p"
                  variant="p"
                  className={
                    isSmallScreen
                      ? "text-white text-xl p-2"
                      : "text-white p-8 text-2xl"
                  }
                  align="center"
                  gutterBottom
                >
                  Over the years I have had the opportunity to work on over a
                  dozen amazing projects and teams that have shaped me into the
                  engineer I am today. From hardware to mechanical projects, I
                  have been blessed to widen my skills through the experiences
                  I've gained from these teams.
                </Typography>
              </Grid>
              <Grid
                key="past-employers"
                className={isSmallScreen ? "mt-8" : ""}
                item
                xs={12}
                sm={6}
                md={6}
              >
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
          }}
        >
          <Container maxWidth="xl" className={isSmallScreen ? "p-4" : "p-12"}>
            <Typography component="h2" variant="h2" align="center" gutterBottom>
              Outside of the Office
            </Typography>

            <Interests />

            <Typography
              component="p"
              variant="p"
              align="center"
              gutterBottom
            ></Typography>
          </Container>
        </Box>
        <Box
          className="text-white bgPcb"
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="xl" className={isSmallScreen ? "p-4" : "p-12"}>
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
