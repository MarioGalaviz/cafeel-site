import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Nav from '../../../components/Nav'
import granos from '../../../components/media/pexels-jessica-lewis-creative-606545.webp'

const MenuCafeteria = () => {
    
    const router = useRouter()
    const { cafe } = router.query

    const [infoCafe, setInfoCafe] = useState({
        nombre: ''
    })
    const [categorias, setCategorias] = useState([])
    const [productos, setProductos] = useState([])
    const [tamanos, setTamanos] = useState([])

    const sectionStyle = {
        
     
        minHeight: '50vh'
    }

    useEffect(() => {


        const fetchMenu = async () => {
        
            const data = await fetch('/api/cafes/info'
            , {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ nombre: cafe })
            }
            )
            const dataa = await data.json()

            const idCafeteria = dataa[0].id_cafeteria
            setInfoCafe(dataa[0])
            
            const rawDataMenu = await fetch('/api/cafes/menu'
            , {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ id: idCafeteria })
            }
            )
            const dataMenu = await rawDataMenu.json()
            console.log(dataMenu)
            setCategorias(dataMenu.categorias)
            setProductos(dataMenu.productos)
            setTamanos(dataMenu.tamanos)
        };
        fetchMenu()
   
    }, [])

    return (
        <div>
            <Head>
                <title>{cafe ? ('Menú de ' + cafe.charAt(0).toUpperCase() + cafe.slice(1) + ' ') : ''}(by Cafeel)</title>
                <meta name="description" content={`Menú de la cafetería ${cafe} generado por Cafeel`} />
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
            <Nav sinIniciar={true}/>
            <Box style={sectionStyle} sx={{ backgroundColor: 'background.paper' }}>
                
                <Box height='18vh' />
                
                <Box height='25vh' display='flex' alignItems='center'  justifyContent='center' flexWrap='wrap'>
                    <Box width='80%'>
                        <Typography variant='h3' align='center'>{infoCafe.nombre}: menú</Typography>
                    </Box>
                </Box>
            
              
            </Box>
            <Box style={{ minHeight: '50vh' }} sx={{ pt: 2, pb: 6 }}>
                <Grid container justifyContent='center'>
                    {categorias.map(categoria => (
                        <Grid item xs={10} key={categoria.id_categoria}>
                            <Typography variant='h3' align='center' sx={{ my: 3 }}>{categoria.categoria}</Typography>
                            {productos.filter(producto => producto.id_categoria === categoria.id_categoria).map(producto => (
                                <Box display='flex' justifyContent='center' width='100%' sx={{ my: 1.5 }} flexWrap='wrap' key={producto.id_producto}>
                                    <Box display='flex' justifyContent='space-between' width='50%' minWidth='300px'>
                                        <Typography variant='h5' align='center'>{producto.producto}</Typography>
                                        <Typography variant='h5' align='center'>{producto.tamano ? '' : `$${producto.costo/100}`}</Typography>
                                        
                                    </Box>
                                    {producto.tamano &&
                                        tamanos.filter(tamano => tamano.id_producto === producto.id_producto).map(tamano => (
                                            <Box display='flex' justifyContent='space-between' width='50%' minWidth='300px' key={tamano.id_tamano}>
                                                <Typography variant='h5' align='center' sx={{ ml: 4 }}>- {tamano.tamano}</Typography>
                                                <Typography variant='h5' align='center'>{`$${tamano.costo/100}`}</Typography>
                                            </Box>
                                        ))
                                        }
                                </Box>
                                
                                
                            ))}
                        </Grid>
                    ))}
                    
                </Grid>
            </Box>
        </div>
    )
}

export default MenuCafeteria