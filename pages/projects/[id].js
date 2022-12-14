import { Button, Container, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import React from 'react'
import Footer from '../../src/components/Footer';
import Navbar from '../../src/components/Navbar';
import projects from '../../src/inputs/projects.json'
import Carousel from 'react-material-ui-carousel';

export default function Project({ projectData }) {
  return (
    <div>
      <Navbar />
      <main>
        <Button href="/projects" variant="contained" startIcon={<ArrowBackIcon />} className="mt-8 ml-8">
          Projects
        </Button>
          <Container maxwidth="l" className="p-8">
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={12} md={6} className="p-8">
              <Typography
              component="h4"
              variant="h4"
              align="left"
              gutterBottom>
                {projectData.title}
            </Typography>
            <Typography
              component="h4"
              variant="subtitle2"
              align="left"
              className="mt-2"
              gutterBottom>
                {projectData.date}
            </Typography>
            <Typography
            component="p"
            variant="body1"
            className="text-xl p-4"
              >
                {projectData.description}
            </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              {projectData.carousel.length != 0 ? (
                <Carousel navButtonsAlwaysVisible="true" animation="slide" interval={6000}>
                  {projectData.carousel.map((imageSrc) => {
                    const key = imageSrc.slice(
                      imageSrc.lastIndexOf('/') + 1,
                      imageSrc.lastIndexOf('.'),
                    );
                    return (<Image src={imageSrc} key={key} alt={projectData.title} width="100%" height="100%" layout="responsive" objectFit="contain"/>)
                  })}
                </Carousel>
                ) : <Image src={projectData.image} alt={projectData.title} width="100%" height="100%" layout="responsive" objectFit="contain"/>}
            </Grid>
          </Grid>
          </Container>
          <Container maxwidth="sm">
            
          </Container>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const project_ids = projects.map((project) => {
    return {
      params: {
        id: project.id,
      }
    }
  });
  return {
    paths: project_ids,
    fallback: false,
  }
// Return a list of possible value for id
}

export async function getStaticProps({ params }) {
// Fetch necessary data for the blog post using params.id
  var projectData;
  for(var project in projects){
    if(projects[project].id === params.id){
      projectData = projects[project];
      break;
    } else{
      continue
    }
  }
  return {
    props: {
      projectData,
    }
  };
}