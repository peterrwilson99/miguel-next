import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import employers from './employers.json'
import Image from 'next/image';

function PastEmployers() {
  return (
    <Carousel>
        {employers.map((employer) => {
            return (
                <Stack
                    direction="column"
                    spacing={5}
                    maxWidth={250}
                    sx={{margin: "auto"}}
                    className="my-4"
                    key={employer.employer}
                    >
                    <Image src={employer.image} alt={employer.employer} width={250} height={250} onClick={() => window.open(employer.link)} />
                
                    <Button href={employer.link} variant="outlined" color='secondary'>
                    <Typography
                            component="h4"
                            variant="h5"
                        >
                            {employer.employer}
                        </Typography>
                    </Button>
                </Stack>  
            )
            })
        }
    </Carousel>
  )
}

export default PastEmployers