
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import projects from './projects.json';
import Link from './Link'

function FeaturedProject() {
    const selected_project = projects[4];
    return (
        <Container sx={{ py: 8 }} maxWidth="xl">
            <Paper
                sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${selected_project.image})`,
                }}
                >
                {/* Increase the priority of the hero background image */}
                {<img style={{ display: 'none' }} src={selected_project.image} />}
                <Box
                    sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                />
                <Grid container>
                    <Grid item md={6}>
                    <Box
                        sx={{
                        position: 'relative',
                        p: { xs: 3, md: 6 },
                        pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        {selected_project.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {selected_project.description}
                        </Typography>
                        <Link variant="subtitle1" href="#">
                        {selected_project.date}
                        </Link>
                    </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default FeaturedProject