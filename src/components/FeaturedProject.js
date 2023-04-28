
import { Box, Button, ButtonBase, Container, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import Link from './Link'

function FeaturedProject(props) {
    const selected_project = props.selected_project;
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <ButtonBase focusRipple className="w-full" href={selected_project.link}>
            <Paper
                className="my-4 w-full p-4"
                sx={{
                    background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${selected_project.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    borderRadius: 5,
                    minHeight: 350
                }}
                elevation={8}
            >
                    <div className={isMediumScreen ? "pt-8 pl-4" :"grid grid-cols-2 pt-8 pl-4"}>
                        <div className="left">
                            <Typography variant={isMediumScreen ? "h5" : "h3"} color="white" align="left">
                                {selected_project.title}
                            </Typography>
                            <Typography variant="body1" className={isMediumScreen ? "" : "text-lg"} color="white" align="left">
                                {selected_project.preview}
                            </Typography>
                            <Typography variant="body1" className={isMediumScreen ? "" : "text-lg"} color="primary" align="left">
                                <a href={selected_project.link}>{selected_project.date}</a>
                            </Typography>
                        </div>
                    </div>
            </Paper>
        </ButtonBase>
    );
}

export default FeaturedProject