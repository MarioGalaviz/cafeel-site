import React, { useState } from "react";
import Image from 'next/image'

import { AppBar, Grid, Menu, MenuItem, Typography, Box, Divider, Button } from '@mui/material';
import { useRouter } from 'next/router'
import logo from './media/cafeel-logo.png'

function NavCool(props) {

    const router = useRouter()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };
  

    return (
    <div>
        <Box display='flex' justifyContent='center'>
            <Box maxWidth='1200px' width='100%'>
                <Grid container justifyContent='center'>
                    <Grid item xs={11}>
                        <Box display='flex' justifyContent='space-between' alignItems='center' height='100px'>
                            {/* <Typography variant="h4" sx={{ my: 2.7 }} style={{ fontWeight: 550 }} onClick={() => router.push('/')}>
                                Cafeel
                            </Typography> */}
                            <Box width='140px'>
                                <Image src={logo} layout='intrinsic' />
                            </Box>
                            
                            {!props.sinIniciar &&
                            <a href="https://app.cafeel.mx/cafeteria/login">
                             
                                <Button variant='outlined' sx={{ mx: 2 }}>
                                    Iniciar
                                </Button>
                            </a>}
                            
                        </Box>
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
            <MenuItem>Dashboard dueño</MenuItem>
            <MenuItem>Mesas</MenuItem>
            <MenuItem>Cocina</MenuItem>
            <Divider variant="middle" />
            <MenuItem>Administrar</MenuItem>
            <Divider variant="middle" />
            <MenuItem>Cerrar sesión</MenuItem>
        </Menu>
                
          
    </div>
    )
}

export default NavCool;