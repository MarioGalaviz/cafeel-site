import React, { useState } from "react";
import Image from 'next/image'
import { AppBar, Grid, Menu, MenuItem, Typography, Box, Divider, Button } from '@mui/material';
import { useRouter } from 'next/router'
import logo from './media/cafeel-logo.png'
import { FiInstagram } from 'react-icons/fi'
import { useSelector } from "react-redux";
import { selectDevice } from "../redux/sliceSesion/sesionSlice";
import { GiHamburgerMenu } from 'react-icons/gi'

function NavCool(props) {

    const router = useRouter()

    const device = useSelector(selectDevice)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };
  
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget); 
    };

    return (
    <div>
        <Box display='flex' justifyContent='center'>
            <Box maxWidth='1200px' width='100%'>
                <Grid container justifyContent='center'>
                    <Grid item xs={6}>
                        <Box display='flex' justifyContent='left' alignItems='center' height='100px'>
                           
                            <Box width='140px' onClick={() => router.push('/')}>
                                <Image alt='logo de Cafeel' src={logo} layout='intrinsic' />
                            </Box>
                            
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        {device === 0 ?
                        <Box display='flex' justifyContent='right' alignItems='center' height='100px'>
                            <Box color='primary.main'sx={{ mx: 2 }} onClick={handleClick}>
                                <GiHamburgerMenu size={35}/>
                            </Box>
                            
                        </Box>
                        :
                        <Box display='flex' justifyContent='right' alignItems='center' height='100px'>
                            
                            <Typography color='primary.main' variant='h6' sx={{ mx: 2 }}  onClick={() => router.push('/precios')}>Precios</Typography>
                            <a href="https://www.instagram.com/cafeel.mx/">
                            <Box color='primary.main' display='flex' alignItems='center' sx={{ mx: 2 }}>
                                <FiInstagram size={30} />
                            </Box>
                            </a>
                            {!props.sinIniciar &&
                            <a href="https://app.cafeel.mx/cafeteria/login">
                                <Button variant='outlined' sx={{ mx: 2 }}>
                                    Iniciar
                                </Button>
                            </a>}
                            
                        </Box>}
                    </Grid>
                </Grid>
            </Box>
        </Box>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={() => router.push('/precios')}>Precios</MenuItem>
            
            <MenuItem>
                <a href="https://www.instagram.com/cafeel.mx/">
                Instagram </a>
                <a href="https://www.instagram.com/cafeel.mx/">
                    <Box color='primary.main' display='flex' alignItems='center' sx={{ mx: 1 }}>
                        <FiInstagram size={25} />
                    </Box>
                </a>
            </MenuItem>
            <Divider variant="middle" />
            <MenuItem><a href="https://app.cafeel.mx/cafeteria/login">
                                <Button variant='outlined' sx={{ mx: 2 }}>
                                    Iniciar
                                </Button>
                            </a></MenuItem>
            
         
        </Menu>
                
          
    </div>
    )
}

export default NavCool;