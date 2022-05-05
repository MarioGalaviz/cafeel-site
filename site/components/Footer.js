import React from "react";
import { Typography, Box, Grid, Card } from '@mui/material';
import { useRouter } from 'next/router'

function Footer() {

    const router = useRouter()

    return (
        <Box className="footer" display='flex' alignItems='center' justifyContent='right' sx={{ backgroundColor: 'primary.main', height: '12vh', width: '100%' }}>
            <Typography sx={{ m: 2.5, color: 'white' }} onClick={() => router.push('/privacidad')} variant="h6" align='center'>Aviso de privacidad</Typography>
        </Box>
    )
}

export default Footer