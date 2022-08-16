import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Navbar() {
  return (
    <AppBar position="relative">
        <Toolbar>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item xs="auto">
                <Button href='/' style={{textTransform: 'unset'}}>
                  <Typography variant="h5" color="white" noWrap>
                    Miguel Manguerra
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs="auto">
                <Grid container spacing={2} justifyContent="space-between">
                  <Grid item xs="auto">
                    <Button href='/about' style={{textTransform: 'unset'}}>
                      <Typography variant="h6" color="white" noWrap>
                        About Me
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs="auto">
                    <Button href='/projects' style={{textTransform: 'unset'}}>
                      <Typography variant="h6" color="white" noWrap>
                        Projects
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs="auto">
                    <Button href='/contact' style={{textTransform: 'unset'}}>
                      <Typography variant="h6" color="white" noWrap>
                        Contact
                      </Typography>
                    </Button >
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar