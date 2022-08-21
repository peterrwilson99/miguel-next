
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import Link from './Link'

function FeaturedProject(props) {
    const selected_project = props.selected_project;
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
                        <Link href={selected_project.link} style={{ textDecoration: 'none', color: "white"}}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {selected_project.title}
                            </Typography>
                        </Link>
                        <Typography variant="h5" color="inherit" paragraph>
                            {selected_project.preview}
                        </Typography>
                        <Link variant="subtitle1" href={selected_project.link}>
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