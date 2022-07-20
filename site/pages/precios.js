import React from "react";
import Head from 'next/head'
import NavCool from "../components/NavCool";
import { Box, Button, Card, Divider, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectDevice } from "../redux/sliceSesion/sesionSlice";
import Bullet from "../components/Bullet";

export default function Precios() {

    const device = useSelector(selectDevice)

    const features = [
        {
            id: 1,
            descipcion: 'Por definir',
        },
        {
            id: 2,
            descipcion: 'Por definir',
        },
        {
            id: 3,
            descipcion: 'Por definir',
        },
        {
            id: 4,
            descipcion: 'Por definir',
        },
    ]

    const planes = [
        {
            id: 1,
            nombre: 'Básico',
            descripcion: 'El plan perfecto para negocios de pocos empleados',
            costo: 100,
            features: [ ]
        },
        {
            id: 2,
            nombre: 'Pro',
            descripcion: 'El mejor plan para las necesidades regulares de un negocio mediano',
            costo: 300,
            features: [ ]
        },
        {
            id: 3,
            nombre: 'Plus',
            descripcion: 'Para los que no quieren límites',
            costo: 500,
            features: [ ]
        },
    ]
    return(
        <Box backgroundColor='background.light'>
            <Head>
                <title>Cafeel - Precios</title>
                <meta name="description" content="Precios para cada negocio" />
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
            <NavCool />
            <Box display='flex' justifyContent='center' sx={{ py: 4 }}>
                <Box maxWidth='1200px' width='100%'>
                    <Grid container justifyContent='center'>
                        <Grid item xs={11}>
                            <Typography variant={device > 0 ? 'h2' : 'h3'} align='center' sx={{ my: 2 }} fontWeight='bold'>Llegaste temprano</Typography>
                        </Grid>
                        <Grid item xs={11}>
                            <Typography variant={device > 0 ? 'h4' : 'h5'} align='center' sx={{ my: 2 }}>Estamos en prueba piloto y todos nuestros planes son gratuitos</Typography>
                        </Grid>
                        <Grid item xs={11}>
                            <Box display='flex' justifyContent='space-around' flexWrap='wrap'>
                                {planes.map(plan => (
                                    <Card sx={{ backgroundColor: 'white', my: 5, py: 4, maxWidth: '300px' }} key={plan.id}>
                                        <Grid container justifyContent='center'>
                                            <Grid item xs={11}>
                                                <Typography align='center' variant='h4' sx={{ my: 1 }}>{plan.nombre}</Typography>
                                            </Grid>
                                            <Grid item xs={11}>
                                                <Box minHeight='100px'>
                                                    <Typography align='center' variant='h6' color='text.secondary' sx={{ my: 2 }}>{plan.descripcion}</Typography>

                                                   

                                                </Box>
                                            </Grid>
                                            <Grid item xs={10} sx={{ my: 1 }}>
                                                <Typography align='center' variant='h3' sx={{ my: 1 }}>${plan.costo}</Typography>
                                            </Grid>
                                            <Grid item xs={10} sx={{ my: 1 }}>
                                                <Box display='flex' justifyContent='center'>
                                                    <Button variant='contained'>Prueba gratuita</Button>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={10} sx={{ my: 3 }}>
                                                <Divider />
                                            </Grid>
                                            <Grid item xs={9} sx={{ my: 1 }}>
                                                {features.map(feature => (
                                                    <Box>
                                                        {plan.features.includes(feature.id) ?
                                                        <Box sx={{ my: 2 }} display='flex' key={feature.id}>
                                                            <Bullet color='primary.main'/>
                                                            <Typography variant='h6' sx={{ mx: 1 }}>{feature.descipcion}</Typography>
                                                        </Box>
                                                        :
                                                        <Box sx={{ my: 2, opacity: '0.4' }} display='flex' key={feature.id}>
                                                            <Bullet color='text.secondary'/>
                                                            <Typography variant='h6' sx={{ mx: 1 }} color='text.secondary'>{feature.descipcion}</Typography>
                                                        </Box>}
                                                    </Box>
                                                    
                                                )) }
                                            </Grid>
                                            

                                        </Grid>

                                    </Card>
                                ))}
                                
                            </Box>
                        </Grid>
                        <Grid item xs={10} sx={{ my: 3 }}>
                                                <Typography variant={device === 0 ? 'h4' : 'h3'} align='center'>¿Necesitas un plan personalizado?</Typography>
                                            </Grid>
                                            <Grid item xs={10} sx={{ my: 3 }}>
                                                <Typography variant={device === 0 ? 'h5' : 'h4'} align='center'>Contáctanos:</Typography>
                                                <Typography variant={device === 0 ? 'h6' : 'h4'} align='center'>contactocafeel@gmail.com</Typography>
                                            </Grid>
                    </Grid>
                </Box>
            </Box>
                        
        </Box>
    )
}