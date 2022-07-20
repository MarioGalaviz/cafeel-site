import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Nav from '../../../components/Nav'
import granos from '../../../components/media/pexels-jessica-lewis-creative-606545.webp'

const LandingCafeteria = () => {
    
    const router = useRouter()
    const { cafe } = router.query

    const [infoCafe, setInfoCafe] = useState({
        nombre: ''
    })

    const sectionStyle = {
        
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: 'center',
        minHeight: '100vh'
    }

    useEffect(() => {
        
        const fetchInfo = async () => {
            const arrPath = window.location.href.split('/')
            const nombreCafe = arrPath[arrPath.length - 1] 
            const data = await fetch('/api/cafes/info'
            , {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ nombre: nombreCafe })
            }
            )
            const dataa = await data.json()
            
            setInfoCafe(dataa[0])          
        };
        setTimeout(() => fetchInfo(), 100)
        
    }, [])

    const handleClickMenu = () => {
        router.push(`/c/${cafe}/menu`)
    }

    return (
        <div>
            <Head>
                <title>{cafe ? (cafe.charAt(0).toUpperCase() + cafe.slice(1) + ' ') : ''}(by Cafeel)</title>
                <meta name="description" content={`Sitio de la cafetería ${cafe} generado por Cafeel`} />
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
            <Nav sinIniciar={true}/>
            <Box style={sectionStyle} >
                <Image alt='' style={{ zIndex: 0, opacity: '30%' }} src={granos} layout="fill" objectFit="cover"/>
                <Box height='28vh' />
                
                <Box height='25vh' display='flex' alignItems='center'  justifyContent='center' flexWrap='wrap'>
                    <Box width='74%'>
                        <Typography variant='h3' zIndex={2} align='center'>{infoCafe.nombre}</Typography>
                    </Box>
                </Box>
                <Box height='10vh' display='flex' alignItems='center'  justifyContent='center' flexWrap='wrap'>
                    <Box width='74%'>
                        <Typography variant='h5' zIndex={2} align='center'>La cafe más cool del condado</Typography>
                    </Box>
                </Box>
                <Box height='35vh' display='flex' alignItems='center'  justifyContent='center' flexWrap='wrap'>
                    
                    <Box sx={{ display: 'flex',justifyContent: 'center', flexWrap: 'wrap'}}>
                            <Button sx={{ m: 1 }} size='large' variant="contained" color='secondary' style={{minWidth: '40%'}} onClick={handleClickMenu}>Menú</Button>          
                    </Box>
                </Box>
            </Box>
            <Box style={{ minHeight: '50vh' }} sx={{ backgroundColor: 'background.paper', py: 3 }}>
                <Grid container justifyContent='center'>
                    <Grid item xs={10} justifyContent='center' sx={{ my: 2 }}>
                        <Typography variant='h3' align='center'>Ubicación</Typography>
                    </Grid>
                    <Grid item xs={10} justifyContent='center' sx={{ my: 1 }}>
                        <Typography variant='h5' align='center'>MGR 376, col. Centro</Typography>
                    </Grid>
                    <Grid item xs={10} justifyContent='center' sx={{ my: 1 }}>
                        <Typography variant='h6' align='center'>Lagos de Moreno, Jalisco, México</Typography>
                    </Grid>
                    <Grid item xs={10} justifyContent='center' sx={{ my: 2 }}>
                        <Divider variant='middle' />
                    </Grid>
                    
                    <Grid item xs={10} justifyContent='center' sx={{ my: 1 }}>
                        <Typography variant='h6' align='center'>Lunes 5pm-6pm</Typography>
                    </Grid>
                    <Grid item xs={10} justifyContent='center' sx={{ my: 1 }}>
                        <Typography variant='h6' align='center'>Martes 5pm-6pm</Typography>
                    </Grid>
                    <Grid item xs={10} justifyContent='center' sx={{ my: 1 }}>
                        <Typography variant='h6' align='center'>Miércoles 5pm-6pm</Typography>
                    </Grid>
                    <Grid item xs={10} justifyContent='center' sx={{ my: 1 }}>
                        <Typography variant='h6' align='center'>Jueves 5pm-6pm</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{ minHeight: '50vh' }} sx={{ py: 3 }}>
                <Grid container justifyContent='center'>
                    <Grid item xs={10} justifyContent='center' sx={{ my: 2 }}>
                        <Typography variant='h3' align='center'>Lo más cool</Typography>
                    </Grid>
                    <Grid item xs={10} justifyContent='center' sx={{ my: 1 }}>
                        <Card>
                            
                            <CardMedia height="140">
                                <Image alt='' src={granos}/>
                            </CardMedia>
                            <CardContent>
                                <Typography variant='h6' align='center'>Smootie preparado por los dioses</Typography>
                            </CardContent>
                            <CardActions>
                                <Box display='flex' justifyContent='center' width='100%'>
                                    <IconButton>
                                    <ShoppingCartIcon />
                                </IconButton>
                                <Button>Ver más</Button>
                                </Box>
                                
                            </CardActions>

                        </Card>
                        
                    </Grid>
                    <Grid item xs={10} justifyContent='center' sx={{ my: 1 }}>
                        <Card>
                            
                            <CardMedia height="140">
                                <Image alt='' src={granos}/>
                            </CardMedia>
                            <CardContent>
                                <Typography variant='h6' align='center'>Smootie preparado por los dioses</Typography>
                            </CardContent>
                            <CardActions>
                                <Box display='flex' justifyContent='center' width='100%' onClick={handleClickMenu}>
                                    <IconButton>
                                    <ShoppingCartIcon />
                                </IconButton>
                                <Button>Ver más</Button>
                                </Box>
                                
                            </CardActions>

                        </Card>
                        
                    </Grid>
                    <Box sx={{ display: 'flex',justifyContent: 'center', flexWrap: 'wrap'}}>
                            <Button sx={{ m: 2 }} size='large' variant="contained" color='secondary' style={{minWidth: '40%'}} onClick={handleClickMenu}>Menú</Button>          
                    </Box>
                    
                </Grid>
            </Box>
        </div>
    )
}

export default LandingCafeteria