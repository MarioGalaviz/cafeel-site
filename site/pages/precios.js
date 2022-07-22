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
            id: 0,
            descipcion: 'Cortes de caja',
        },
        {
            id: 1,
            descipcion: 'Cuentas de empleado: ',
        },
        {
            id: 2,
            descipcion: 'Cocinas: ',
        },
        {
            id: 3,
            descipcion: 'Control de inventarios',
        },
        {
            id: 4,
            descipcion: 'Sitio web y menú digital',
        },
        {
            id: 5,
            descipcion: 'Tarjetas de regalo y programas de lealtad',
        },
        {
            id: 6,
            descipcion: 'Notificaciones de negocio por WA',
        },
    ]

    const planes = [
        {
            id: 0,
            nombre: 'Gratuito',
            descripcion: 'Funciones básicas gratuitas de por vida',
            costo: 0,
            features: 3,
            empleados: 1,
            cocinas: 1
        },
        {
            id: 1,
            nombre: 'Básico',
            descripcion: 'El plan perfecto para negocios de pocos empleados',
            costo: 100,
            features: 3,
            empleados: 3,
            cocinas: 1
        },
        {
            id: 2,
            nombre: 'Pro',
            descripcion: 'El mejor plan para las necesidades regulares de un negocio mediano',
            costo: 300,
            features: 5,
            empleados: 5,
            cocinas: 3
        },
        {
            id: 3,
            nombre: 'Plus',
            descripcion: 'Para los que no quieren límites',
            costo: 500,
            features: 7,
            empleados: 'ilimitadas',
            cocinas: 'ilimitadas'
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
                            <Typography variant={device > 0 ? 'h2' : 'h3'} align='center' sx={{ my: 2 }}>El <Box fontWeight='bold' display='inline'>plan perfecto</Box> para cualquier negocio</Typography>
                        </Grid>
                        <Grid item xs={11}>
                            <Typography variant={device > 0 ? 'h5' : 'h6'} align='center' sx={{ my: 2 }}>La única herramienta que te ayuda más de lo que cobra</Typography>
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
                                                    <a href="https://app.cafeel.mx/cafeteria/signin">
                                                        <Button variant='contained'>Prueba gratuita</Button>
                                                    </a>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={10} sx={{ my: 3 }}>
                                                <Divider />
                                            </Grid>
                                            <Grid item xs={10} sx={{ my: 1 }}>
                                                {features.map(feature => (
                                                    <Box key={feature.id}>
                                                        {plan.features > feature.id ?
                                                        <Box sx={{ my: 2 }} display='flex' key={feature.id}>
                                                            <Bullet color='primary.main'/>
                                                            <Typography variant='h6' sx={{ mx: 1 }}>{feature.descipcion}{feature.id === 1 && plan.empleados}{feature.id === 2 && plan.cocinas}</Typography>
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