import { Card, CardMedia, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import skills from '../inputs/skills.json'

function Skills() {
  return (
    <Grid container spacing={4}>
            {skills.map((skill) => (
            <Grid key={skill.title} item xs={12} sm={6} md={4}>
                <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 7}}
                elevation={15}
                >   
                    <CardMedia
                        component="img"
                        image={skill.image}
                        alt=""
                        sx={{
                            maxHeight: 400,
                        }}
                    />
                    <div className="p-6">
                        <Typography
                            component="h4"
                            variant="h4"
                            gutterBottom
                            >
                            {skill.title}
                        </Typography>
                        <Typography
                            component="p"
                            variant="p"
                            gutterBottom
                            >
                            {skill.description}
                        </Typography>
                    </div>
                </Card>
            </Grid>
            ))}
        </Grid>
  )
}

export default Skills