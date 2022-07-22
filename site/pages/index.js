import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import Nav from '../components/Nav'
import NavCool from '../components/NavCool'
import Footer from '../components/Footer'
import heroMain from '../components/media/Hero-main.png'
import heroMain2 from '../components/media/Hero-main-2.png'
import heroMain3 from '../components/media/Hero-main-3.png'
import heroComida1 from '../components/media/Hero-comida-1.png'
import heroComida2 from '../components/media/Hero-comida-2.png'
import heroTarjeta from '../components/media/Hero-tarjeta.png'
import section1 from '../components/media/Section-1.png'
import section2 from '../components/media/Section-2.png'
import sectionComida from '../components/media/Section-comida.png'
import negociosBienSuave from '../components/media/Negocios-biensuave.jpg'
import googlePlay from '../components/media/google-play-badge.png'
import granos from '../components/media/pexels-jessica-lewis-creative-606545.webp'
import { useRouter } from 'next/router'
import { store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { useSelector } from 'react-redux'
import { selectDevice } from '../redux/sliceSesion/sesionSlice'

import { useEffect } from 'react'
import { BsGraphUp, BsWhatsapp } from 'react-icons/bs'
import { RiHandHeartFill } from 'react-icons/ri'
import { FaCashRegister } from 'react-icons/fa'
import { GiExpense, GiFullPizza, GiCookingPot, GiNotebook } from 'react-icons/gi'
import { FiUsers } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import Bullet from '../components/Bullet'

export default function Home() {

    const router = useRouter()
    let persistor = persistStore(store);

    const device = useSelector(selectDevice)
    const features = [
        {
            icono: <GiNotebook color='white' size='60'/>,
            nombre: 'Registra órdenes'
        },
        {
            icono: <GiCookingPot color='white' size='60'/>,
            nombre: 'Comanda a cocinas'
        },
        {
            icono: <FaCashRegister color='white' size='60'/>,
            nombre: 'Cortes de caja'
        },
        {
            icono: <BsGraphUp color='white' size='60'/>,
            nombre: 'Información en tiempo real'
        },
        
        {
            icono: <RiHandHeartFill color='white' size='60'/>,
            nombre: 'Programas de lealtad'
        },
        {
            icono: <GiExpense color='white' size='60'/>,
            nombre: 'Inventarios'
        },
        {
            icono: <BsWhatsapp color='white' size='60'/>,
            nombre: 'Notificaciones por Whatsapp'
        },
        {
            icono: <FiUsers color='white' size='60'/>,
            nombre: 'Múltiples usuarios'
        },
    ]

    useEffect(() => {
        // Aos.init({ duration: 1200 })
    }, [])

    return (
        <div>
            <Head>
                <title>Cafeel</title>
                <meta name="description" content="Administración de negocios gastronómicos" />
                <link rel="icon" href="/favicon.ico" />
                
            </Head>

            <NavCool />
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <Box display='flex' justifyContent='center'>
                <Box maxWidth='1200px' width='100%'>
                    <Box display='flex' justifyContent={device > 1 ? 'space-between' : 'center'}  flexWrap='wrap'>

                    
                        <Box minHeight={device === 2 ? '90vh' : ''}>
                            <Box maxWidth={device === 2 ? '600px' : '500px'} sx={{ py: 8}}>
                                <div data-aos='fade-up'>
                                <Grid container justifyContent='center'>
                                    <Grid item xs={11}>
                                        <Box>
                                            <Typography variant={device > 0 ? 'h2' : 'h3'} sx={{ letterSpacing: -2, lineHeight: 1.1  }}>Transforma tu negocio con una <Box fontWeight='bold' display='inline'>poderosa app de administración</Box></Typography>
                                        </Box>
                                        <Box sx={{ my: 3 }}>
                                            <Typography variant='h6' sx={{ letterSpacing: -0.5 }}>Deja de gastar el tiempo con comandas y cuentas a mano. Opera con tecnología que te ayuda a tener el negocio en la palma de tu mano</Typography>
                                        </Box>
                                        <Box display='flex' sx={{ mt: 5 }} position='relative'>
                                            <a href="https://app.cafeel.mx/cafeteria/signin">
                                                <Button variant='contained' size='large'>Comienza prueba gratuita</Button>
                                            </a>
                                            <Box width='160px' position='absolute' zIndex={2} top='5%' left={device  === 2 ? '55%': '65%'} display={device === 0 ? 'none' : ''}>
                                                <Image alt='' src={heroTarjeta} layout='intrinsic' />
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </div>
                            </Box>
                        </Box>
                      

                        <Box display='flex' justifyContent='center' sx={{ py: 2 }}>

                        
                        <Box maxWidth='500px' width='90%' position='relative' display='flex' flexWrap='wrap'>
                            <Box display='flex' justifyContent='center' sx={{ my: '10%'}}>
                                <Box width='80%'>
                                    <div data-aos='fade-up' data-aos-easing="ease-in-sine">
                                        <Image alt='' src={heroMain} layout='intrinsic' />
                                    </div>
                                </Box>
                            </Box>
                            <Box width='35%' position='absolute' zindex={4} top='50%' right='5%'>
                            <div data-aos='fade-up' data-aos-easing="ease-in-sine">
                                <Image alt='' src={heroMain2} layout='intrinsic' />
                                </div>
                            </Box>
                            <Box width='60%' sx={{ m: '5%' }}>
                            <div data-aos='fade-up' data-aos-easing="ease-in-sine">
                                <Image alt='' src={heroMain3} layout='intrinsic' zindex={6}  />
                                </div>
                            </Box>
                            
                            
                       
                            
                            <Box width='28%' position='absolute' zIndex={2} top='0%' right='2%'>
                            <div data-aos='zoom-in' data-aos-duration="1500">
                                <Image alt='' src={heroComida1} layout='intrinsic' />
                                </div>
                            </Box>
                            <Box width='28%' position='absolute' zIndex={2} top='30%' right='80%'>
                            <div data-aos='zoom-in-right' data-aos-easing="ease-in-sine" data-aos-offset="300" data-aos-duration="1500">
                                <Image alt='' src={heroComida2} layout='intrinsic' />
                                </div>
                            </Box>
                            
                        </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box display='flex' justifyContent='center' backgroundColor='primary.darker' sx={{ py: 8 }}>
                <Box maxWidth='1200px' width='100%'>
                    <Grid container justifyContent='center'>
                        <Grid item xs={11}>
                        <div data-aos='fade-up'>
                            <Typography variant={device > 0 ? 'h2' : 'h3'} color='white' align='center' sx={{ my: 2 }}>Funciones que te dan <Box fontWeight='bold' display='inline'>resultados</Box></Typography>
                        </div>
                        </Grid>
                        <Grid item xs={10}>
                        <div data-aos='fade-up'>
                            <Typography variant={device > 0 ? 'h5' : 'h6'} color='white' align='center' sx={{ my: 2 }}>Transforma cómo operas tu negocio gastronómico. Mantén tus cocinas funcionando, tus clientes satisfechos y tus números en órden</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={11}>
                            <Box display='flex' justifyContent='center'>
                            
                            
                            <Box display='flex' justifyContent='space-around' width='80%' flexWrap='wrap' maxWidth='850px'>
                            {features.map(feature => (
                                <div key={feature.nombre} data-aos='zoom-in'>
                                <Box display='flex' justifyContent='center' flexWrap='wrap' width='200px' sx={{ my: 3 }}>
                                    <Box backgroundColor='primary.main' sx={{ p: 3, borderRadius: '20px' }}>
                                        {feature.icono}
                                    </Box>
                                    <Typography variant='h5' color='white' align='center' fontWeight='bold' width='100%' sx={{ mt: 1.5 }}>{feature.nombre}</Typography>
                                </Box>
                                </div>
                                ))}
                                
                            </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    
                </Box>
            </Box>
            <Box display='flex' justifyContent='center'>
                <Box maxWidth='1200px' width='100%'>
                    <Box display='flex' justifyContent={device > 1 ? 'space-around' : 'center'}  flexWrap='wrap' alignItems='center' sx={{ pt: 6 }}>
                        <Box minHeight={device === 0 ? '70vh' : '75vh'} maxWidth='300px' height='100%' sx={{ mt: 4 }} display='flex' alignItems='center' position='relative'>
                            
                            <Box width='100%' position='absolute' zIndex={1} top='0%' right='10%'>
                                <div data-aos='zoom-in'>
                                    <Image alt='' src={section1} layout='intrinsic' />
                                </div>
                            </Box>
                            <Box width='35%' position='absolute' zIndex={2} top='20%' right='-5%'>
                                <div data-aos='zoom-in' data-aos-duration="1500">
                                    <Image alt='' src={sectionComida} layout='intrinsic' />
                                </div>
                            </Box>
                            <Box width='70%' position='absolute' zIndex={2} top='45%' right='-5%'>
                                <div data-aos='fade-up' data-aos-easing="ease-in-sine">
                                    <Image alt='' src={section2} layout='intrinsic' />
                                </div>
                            </Box>
                            <Box sx={{opacity: '0.2', color: 'triadic2.main'}}>
                                <GiFullPizza alt='' size={device === 0 ? 240 : 380} />
                            </Box>
                        </Box>
                        <Box minHeight={device === 2 ? '75vh' : ''}>
                            <Box maxWidth={device === 2 ? '500px' : '400px'} sx={{ my: 4 }}>
                                <div data-aos='fade-up'>
                                <Grid container justifyContent='center'>
                                    <Grid item xs={11}>
                                        <Box>
                                            <Typography variant={device > 0 ? 'h3' : 'h4'} >Utiliza la tecnología más avanzada <Box fontWeight='bold' display='inline'>sin costos de instalación</Box></Typography>
                                        </Box>
                                        <Box sx={{ my: 3 }} display='flex'>
                                            <Bullet color={'primary.main'}/>
                                            <Typography variant='h6' sx={{ mx: 1 }}>Configura tu menú en 10 minutos y comienza a operar con los equipos que tengas (celulares, tablets, computadoras)</Typography>
                                        </Box>
                                        <Box sx={{ my: 3 }} display='flex'>
                                            <Bullet color={'primary.main'}/>
                                            <Typography variant='h6' sx={{ mx: 1 }}>Se adapta a negocios de cualquier tamaño</Typography>
                                        </Box>
                                        <Box sx={{ my: 3 }} display='flex'>
                                            <Bullet color={'primary.main'}/>
                                            <Typography variant='h6' sx={{ mx: 1 }}>Costo mensual entre $0 y $500 MXN ($0 a $25 USD)</Typography>
                                        </Box>
                                        <div data-aos='fade-up'>
                                            <Box display='flex' sx={{ mt: 5 }} alignItems='center' flexWrap='wrap'>
                                                <Button variant='contained' size='large' onClick={() => router.push('/precios')}>Ver precios</Button>
                                                <a href="https://play.google.com/store/apps/details?id=mx.cafeel.twa">
                                                <Box width={device === 0 ? '150px' : '160px'} sx={{mt: 1, mx: 2}}>
                                                    <Image alt='' src={googlePlay} layout='intrinsic' />
                                                </Box>
                                                </a>
                                                <Box sx={{ my: 2, color: 'primary.darker' }}>
                            <a href="https://www.instagram.com/cafeel.mx/">
                                <Box backgroundColor='background.light' height='90px' width='90px' display='flex' alignItems='center' justifyContent='center' sx={{ borderRadius: '60px'}}>
                                    <FiInstagram size={40}/>
                                </Box>
                            </a>
                        </Box>
                                            </Box>
                                        </div>
                                    </Grid>
                                </Grid>
                                </div>
                            </Box>
                        </Box>
                      

                        
                    </Box>
                </Box>
            </Box>
            <Box display='flex' justifyContent='center' sx={{ py: 8 }}>
                <Box maxWidth='1200px' width='100%'>
                    <Grid container justifyContent='center'>
                        <Grid item xs={11}>
                            <Typography variant={device > 0 ? 'h3' : 'h4'} align='center' sx={{ my: 2 }} fontWeight='bold'>Negocios que usan Cafeel</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Box display='flex' justifyContent='center'sx={{ mt: 5, mb: 2 }}>
                                <Box width='180px'>
                                <a href="https://instagram.com/bien_suave_ldm">
                                    <div data-aos='zoom-in'>
                                        <Image alt='' src={negociosBienSuave} layout='intrinsic' />
                                        
                                    </div>
                                    </a>      
                                </Box> 
                            </Box>                     
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box display='flex' justifyContent='center' backgroundColor='primary.darker' sx={{ py: 8 }}>
                <Box maxWidth='1200px' width='100%'>
                    <div data-aos='fade-up'>
                    <Grid container justifyContent='center'>
                        <Grid item xs={11}>
                            <Typography variant={device > 0 ? 'h1' : 'h3'} color='white' align='center' sx={{ my: 2 }}>No podrás vivir sin <Box fontWeight='bold' display='inline'>Cafeel.</Box> ¿No estás convencidx? Nos encantan las pruebas.</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Box display='flex' justifyContent='center'sx={{ mt: 5, mb: 2 }}>
                                <div data-aos='fade-up'>
                                    <a href="https://app.cafeel.mx/cafeteria/signin">
                                        <Button variant='contained' size='large'>Comienza prueba gratuita</Button>
                                    </a> 
                                </div>     
                            </Box>    
                                         
                        </Grid>
                    </Grid>
                    </div>
                </Box>
            </Box>
     
            
            <Footer />
    
        </div>
    )
}
