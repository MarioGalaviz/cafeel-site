import React from "react";
import Image from 'next/image'
import { Typography, Box, Grid, Card } from '@mui/material';
import { useRouter } from 'next/router'
import { FiInstagram } from 'react-icons/fi'
import logo from '../components/media/logo-cafeel-blanco.png'

function FooterNegocios() {

    const router = useRouter()



    return (
        <Box sx={{ backgroundColor: 'primary.main', minHeight: '12vh', width: '100%', py: 6 }}>
            {/* <Grid container justifyContent='center'>
                <Grid item xs={11}>
                <Box display='flex' flexWrap='wrap' justifyContent='space-between'>
                <Box display='flex' flexWrap='wrap' justifyContent='space-between'>

                
                <Box width='220px' sx={{mt: 1, mx: 2}}>
                    <Image alt='' src={logo} layout='intrinsic' />
                </Box>
                <Box sx={{mt: 4, mx: 5}}>
                    <Typography sx={{ my: 2, color: 'white', fontWeight: 'bold' }} variant='h6'>ENLACES</Typography>
                    <Typography sx={{ my: 1, color: 'white' }} variant='h6'onClick={() => router.push('/precios')}>Precios</Typography>
                    <a href="https://app.cafeel.mx/cafeteria/login">
                        <Typography sx={{ my: 1, color: 'white' }} variant='h6'>Iniciar</Typography>
                    </a>
                    
                </Box>
                <Box sx={{mt: 4, mx: 5}}>
                    <Typography sx={{ my: 2, color: 'white', fontWeight: 'bold' }} variant='h6'>CONTACTO</Typography>
                    <Typography sx={{ my: 1, color: 'white' }} variant='h6'>contactocafeel@gmail.com</Typography>
                 
                </Box>
                </Box>
                <Box sx={{mt: 1, mx: 5}}>
                    
                    
                        <Box sx={{ my: 2, color: 'white' }}>
                            <a href="https://www.instagram.com/cafeel.mx/">
                                <Box backgroundColor='primary.darker' height='100px' width='100px' display='flex' alignItems='center' justifyContent='center' sx={{ borderRadius: '60px'}}>
                                    <FiInstagram size={50}/>
                                </Box>
                            </a>
                        </Box>
                    
                </Box>
                

            </Box>
                </Grid>

            </Grid>
            
            <Box>
                <Typography sx={{ pt: 6, color: 'white' }} onClick={() => router.push('/privacidad')} variant="body1" align='center'>Aviso de privacidad</Typography>

                </Box>
         */}
      
        </Box>
    )
}

export default FooterNegocios