import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import employers from '../inputs/employers.json'
import Image from 'next/image';

function PastEmployers(props) {
  return (
    <Carousel navButtonsAlwaysVisible="true">
        {employers.map((employer) => {
            return (
                <Stack
                    direction="column"
                    spacing={5}
                    maxWidth={props.width ? props.width : 350}
                    sx={{margin: "auto"}}
                    key={employer.employer}
                    >
                    <Image src={employer.image} alt={employer.employer} width={props.width ? props.width : 350} height={props.width ? props.width : 350} onClick={() => window.open(employer.link)} />
                
                    {props.showButton ? (<Button href={employer.link} variant="outlined" color='primary' size="small">
                    <Typography
                            component="h4"
                            variant="h5"
                        >
                            {employer.employer}
                        </Typography>
                    </Button> ) : <></>}
                </Stack>  
            )
            })
        }
    </Carousel>
  )
}

export default PastEmployers