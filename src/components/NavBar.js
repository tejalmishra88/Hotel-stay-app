
import React from 'react';
import { Lock, Menu } from '@mui/icons-material';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography,
  } from '@mui/material';
  import photoURL from '../1.jpg';
import { useValue } from '../context/ContextProvider';
import UserIcons from './user/UserIcons';

const user ={name:'test', photoURL}
const NavBar = () => {
    const { state:{currentUser}, dispatch} = useValue()
    console.log('navbar page--currentUser=',currentUser)

  return (
    <AppBar>
        <Container maxWidth='lg'>
            <Toolbar disableGutters>
                <Box sx={{mr:1}}>
                    <IconButton size='large' color='inherit'> <Menu/>  </IconButton>
                </Box>
                <Typography varient='h6' component='h1'noWrap sx={{flexGrow:1, display:{xs:'none', md: 'flex'}}}>
                    You Are Welcome
                </Typography>
                <Typography varient='h6' component='h1' noWrap sx={{flexGrow:1, display:{xs:'flex', md: 'none'}}}>
                    Y A W
                </Typography>

                {!currentUser ? 
                (<Button color="inherit" startIcon={<Lock />}
                      onClick={() => dispatch({ type: 'OPEN_LOGIN' })}>
                      Login
                    </Button>
                ) : (  <UserIcons />   )}
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default NavBar