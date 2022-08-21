import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import projects from '../inputs/projects.json';
import { CardActionArea } from '@mui/material';


function ProjectGrid() {
  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
        <Grid container spacing={4}>
            {projects.map((project) => (
            <Grid key={project.id} item xs={12} sm={6} md={4}>
                <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                elevation={10}
                >
                <CardActionArea href={project.link}>
                    <CardMedia
                        component="img"
                        image={project.image}
                        alt=""
                    />
                </CardActionArea>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="p">
                    {project.date}
                    </Typography>
                    <Typography>
                    {project.preview}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={project.link}>View</Button>
                </CardActions>
                </Card>
            </Grid>
            ))}
        </Grid>
    </Container>
  )
}

export default ProjectGrid