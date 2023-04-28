import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useMediaQuery, useTheme } from '@mui/material';

function Navbar(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar position="relative">
        <Toolbar>
          <div className="flex justify-between w-full">
            <div>
              <Button href='/' style={{textTransform: 'unset'}}>
                <Typography variant="h5" color="white" noWrap>
                  {isSmallScreen ? "M.M." : "Miguel Manguerra"}
                </Typography>
              </Button>
            </div>
            <div>
              <div className="flex justify-between w-full flex-wrap">
                <div>
                  <Button
                  // disabled={props.currentPage === 'about'}
                  href='/about'
                  style={{textTransform: 'unset'}}>
                    <Typography variant={isSmallScreen ? "body1" : "h6"} color="white" noWrap>
                      About Me
                    </Typography>
                  </Button>
                </div>
                <div>
                  <Button
                  // disabled={props.currentPage === 'projects'}
                  href='/projects'
                  style={{textTransform: 'unset'}}>
                    <Typography variant={isSmallScreen ? "body1" : "h6"} color="white" noWrap>
                      Projects
                    </Typography>
                  </Button>
                </div>
                <div>
                  <Button
                  // disabled={props.currentPage === 'contact'}
                  href='/contact'
                  style={{textTransform: 'unset'}}>
                    <Typography variant={isSmallScreen ? "body1" : "h6"} color="white" noWrap>
                      Contact
                    </Typography>
                  </Button >
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar