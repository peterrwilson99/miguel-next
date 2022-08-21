import { Grid, Typography } from '@mui/material'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import GamesIcon from '@mui/icons-material/Games';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import React from 'react'

function Interests() {
    const interests = [
        {
            "name": "Soccer",
            "description": "I am an avid soccer fan and player, playing multiple times a week in different intramurals and drop-in leagues.",
            "icon": <SportsSoccerIcon sx={{width: 125, height: 125, margin: "auto",display: "block"}}/>,
        },
        {
            "name": "Cooking",
            "description": "I love cooking meals for family and friends, and experimenting in the kitchen with new and exciting meals.",
            "icon": <LocalDiningIcon sx={{width: 125, height: 125, margin: "auto",display: "block"}}/>,
        },
        {
            "name": "Gaming",
            "description": "With a background in competitive gaming, I now enjoy taking time to relax and talk with my friends while playing some video games.",
            "icon": <GamesIcon sx={{width: 125, height: 125, margin: "auto",display: "block"}}/>,
        },
        {
            "name": "Weightlifting",
            "description": "I discovered weightlifting in University and was enthused seeing growth over persistent training.",
            "icon": <FitnessCenterIcon sx={{width: 125, height: 125, margin: "auto",display: "block"}}/>,
        }
    ]
  return (
    <Grid container spacing={5} className="p-8" alignItems="center">
        {interests.map((interest) => {
                return (
                    <Grid key={interest.name} item xs={12} sm={6} md={3}>
                        {interest.icon}
                        <Typography
                            variant="h4"
                            component="h4"
                            align="center"
                            className="mt-5"
                            gutterBottom
                        >
                            {interest.name}
                        </Typography>
                        <Typography
                            variant="p"
                            component="p"
                            className="text-xl"
                            align="center"
                            gutterBottom
                        >
                            {interest.description}
                        </Typography>
                    </Grid>
                )
              })
        }
        <Grid key="employee-description" item xs={12} sm={6} md={3}>

        </Grid>
    </Grid>
  )
}

export default Interests