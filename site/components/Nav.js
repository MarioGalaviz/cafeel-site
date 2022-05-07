import React, { useState } from "react";
import { AppBar, Toolbar, Menu, MenuItem, Typography, Box, Divider } from '@mui/material';
import { useRouter } from 'next/router'

function Nav(props) {

    const router = useRouter()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };
  

    return (
    <div>

        <AppBar position={props.sticky ? "sticky" : 'fixed'}>
            <Toolbar>
                <Box display='flex' justifyContent='space-between' alignItems='center' style={{minWidth: '100%'}}>
                    <Typography variant="h4" sx={{ my: 2.7 }} style={{ fontWeight: 550 }} onClick={() => router.push('/')}>
                        Cafeel
                    </Typography>
                    {!props.sinIniciar &&
                    <a href="https://app.cafeel.mx/cafeteria/login">
                        <Typography variant="h5" style={{ textDecoration: 'underline' }}>
                            iniciar
                        </Typography>
                    </a>}
                    
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
                
          </Toolbar>
        </AppBar>
    </div>
    )
}

export default Nav;