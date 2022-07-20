import React from "react";
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function Bullet(props) {

    const { color } = props


  

    return (
        <Box display='inline'>

        
        <Box position='relative' sx={{ height: '28px', width: '28px', my: .27 }}>
            <Box sx={{ backgroundColor: color, height: '28px', width: '28px',  opacity: '0.2',  borderRadius: '12px' }} display='flex' alignItems='center' justifyContent='center' />
            <Box sx={{ backgroundColor: color, height: '10px', width: '10px', borderRadius: '2px' }} position='absolute' top='9px' right='9px' />
        </Box>
        </Box>
    )
}

export default Bullet;