import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import Footer from '../../src/Footer';
import Navbar from '../../src/Navbar';
import projects from '../../src/projects.json'

export default function Project({ projectData }) {
  return (
    <div>
      <Navbar />
      <main>
          <Container maxwidth="l" className="p-12">
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs="6" className="p-8">
              <Typography
              component="h4"
              variant="h4"
              align="left"
              gutterButtom>
                {projectData.title}
            </Typography>
            <Typography
              component="h4"
              variant="subtitle2"
              align="left"
              className="mt-2"
              gutterButtom>
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
            <Grid item xs="6">
              <Image src={projectData.image} alt={projectData.title} width={624} height={424}/>
            </Grid>
          </Grid>
          </Container>
          <Container maxwidth="m" className="p-12">
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
  console.log(project_ids)
  return {
    paths: project_ids,
    fallback: false,
  }
// Return a list of possible value for id
}

export async function getStaticProps({ params }) {
// Fetch necessary data for the blog post using params.id
  var projectData = projects[0];
  for(var project in projects){
    if(project.id === params.id){
      projectData = project;
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