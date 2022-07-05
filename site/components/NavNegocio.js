import React from "react";
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useRouter } from 'next/router'

function NavNegocio(props) {

    const { nombre, nombreRuta } = props

    const router = useRouter()


  

    return (
    <div>

        <AppBar position={props.sticky ? "sticky" : 'fixed'}>
            <Toolbar>
                <Box display='flex' justifyContent='space-between' alignItems='center' style={{minWidth: '100%'}}>
                    <Typography variant="h4" sx={{ my: 2.7 }} style={{ fontWeight: 550 }} onClick={() => router.push(`/c/${nombreRuta}`)}>
                        {nombre}
                    </Typography>
                 
                    
                </Box>
                
       
                
          </Toolbar>
        </AppBar>
    </div>
    )
}

export default NavNegocio;