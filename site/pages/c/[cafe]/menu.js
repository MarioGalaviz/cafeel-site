import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Nav from '../../../components/Nav'
import NavNegocio from '../../../components/NavNegocio';
import granos from '../../../components/media/pexels-jessica-lewis-creative-606545.webp'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../../../components/Footer';
import FooterNegocios from '../../../components/FooterNegocios';
import { useSelector } from 'react-redux';
import { selectDevice } from '../../../redux/sliceSesion/sesionSlice';
import ModalProducto from '../../../components/ModalProducto';

const MenuCafeteria = () => {
    
    const router = useRouter()
    const { cafe } = router.query

    const device = useSelector(selectDevice)

    const [infoCafe, setInfoCafe] = useState({
        nombre: ''
    })
    const [categorias, setCategorias] = useState([])
    const [productos, setProductos] = useState([])
    const [tamanos, setTamanos] = useState([])
    const [prodExpandido, setProdExpandido] = useState('')
    const [nombreCafe, setNombreCafe] = useState('')
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)

    useEffect(() => {
        
        const arrPath = window.location.href.split('/')
        setNombreCafe(arrPath[arrPath.length - 2]) 
        const nombreCafeUseEffect = arrPath[arrPath.length - 2]

        const fetchMenu = async () => {
            
        
            const data = await fetch('/api/cafes/info'
            , {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ nombre: nombreCafeUseEffect })
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

    const handleClickExpandir = (id) => {
        if (id === prodExpandido) {
            setProdExpandido(null)
        } else {
            setProdExpandido(id)
        }
        
    }

    const handleClickProducto = (id) => {
        setModal(!modal)
        setProducto(productos.filter(producto => producto.id_producto === id)[0])
    }

    return (
        <div>
     

            <Head>
                <title>{cafe ? ('Menú de ' + cafe.charAt(0).toUpperCase() + cafe.slice(1) + ' ') : 'Menú '}(by Cafeel)</title>
                <meta name="description" content={`Menú de la cafetería generado por Cafeel`} />
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
            {/* <NavNegocio nombre={infoCafe.nombre} nombreRuta={nombreCafe}/> */}
            

            <Box sx={{ backgroundColor: 'background.paper' }} height='50vh' display='flex' alignItems='center' flexDirection='column' justifyContent='center' flexWrap='wrap'>
            <div data-aos='zoom-in'>
                <Box>
                    <Typography variant='h3' align='center'>{infoCafe.nombre}</Typography>
                
                    <Typography variant='h4' align='center'>Menú</Typography>
                </Box>
                </div>
        
            </Box>
            
            <Box style={{ minHeight: '50vh' }} sx={{ pt: 2 }}>
                <Grid container justifyContent='center' sx={{ pb: 5 }}>
                    <Grid item xs={10} key={-2}>
                        <Typography variant='h3' align='center' sx={{ my: 5 }}>Lo más top</Typography>
                    </Grid>
                    <Grid item xs={10}>
                    
                        <Box display='flex' justifyContent='space-around' flexWrap='wrap' alignItems='center'>
                            {productos.slice(0,3).map((producto, index) => (
                            <div data-aos='fade-up' data-aos-duration={device === 0 ? '' : (((index) * 500) + 300)} key={'top' + producto.id_producto}>
                                <Box>
                                    {producto.imagen ? 
                                    <Box display='flex' justifyContent='center' sx={{ my: 2 }} width='36vh'>
                                        <Box height='54vh' width='36vh' sx={{ position: "relative" }} onClick={() => handleClickProducto(producto.id_producto)}>
                                            <Image
                                                alt="Image Alt"
                                                src={producto.imagen} 
                                                layout="fill"
                                                objectFit="cover" // Scale your image down to fit into the container
                                                style={{ borderRadius: '30px'}}
                                            />
                                        </Box>
                                    </Box>
                                    :
                                    <Card sx={{ my: 2 }} onClick={() => handleClickProducto(producto.id_producto)}>
                                        <Box width='36vh' height='12vh' display='flex' alignItems='center' sx={{ py: 7 }}>
                                            <Typography variant='h4' width='100%' align='center' sx={{ my: 2 }}>{producto.nombre_comercial || producto.producto}</Typography>

                                        </Box>

                                    </Card>
                                    }
                                </Box>
                            </div>
                            ))}
                        </Box>
                    </Grid>
                    {categorias.map(categoria => (
                        <Grid item xs={10} key={categoria.id_categoria}>
                            <Typography variant='h3' align='center' sx={{ my: 3 }}>{categoria.categoria}</Typography>
                            {productos.filter(producto => producto.id_categoria === categoria.id_categoria).map(producto => (
                                <div data-aos='fade-up' key={producto.id_producto}>
                                <Box display='flex' justifyContent='center' width='100%' sx={{ my: 3 }} flexWrap='wrap'>
                                    <Box display='flex' justifyContent='space-between' width='100%' maxWidth='420px'>
                                        <Typography variant='h5' align='left' onClick={() => handleClickProducto(producto.id_producto)}>{producto.nombre_comercial || producto.producto}</Typography>
                                        <Typography variant='h5' align='center' onClick={producto.tamano ? () => handleClickExpandir(producto.id_producto) : () => handleClickProducto(producto.id_producto)}>{producto.tamano ? <ExpandMoreIcon onClick={() => handleClickExpandir(producto.id_producto)}/> : `$${producto.costo/100}`}</Typography>
                                    </Box>
                                    <Box width='100%'/>
                                    {(producto.tamano && producto.id_producto === prodExpandido) &&
                                        tamanos.filter(tamano => tamano.id_producto === producto.id_producto).map(tamano => (
                                            <Box display='flex' justifyContent='space-between' width='52%' minWidth='300px' key={tamano.id_tamano} sx={{ my: .8 }} onClick={() => handleClickProducto(producto.id_producto)}>
                                                <Typography variant='h5' align='center' sx={{ ml: 4 }}>- {tamano.tamano}</Typography>
                                                <Typography variant='h5' align='center'>{`$${tamano.costo/100}`}</Typography>
                                            </Box>
                                        ))
                                    }
                                </Box>
                                </div>
                                
                            ))}
                        </Grid>
                    ))}
               
                </Grid>
                <Grid container justifyContent='center' sx={{ backgroundColor: 'background.paper', py: 8 }}>
                    <Grid item xs={8}>
                    
                    <Box display='flex' justifyContent='space-around' flexWrap='wrap' alignItems='center'>
                        {productos.filter(producto => producto.imagen).map((producto, index) => (
                        <div data-aos='fade-up' key={'top' + producto.id_producto}>
                           
                            <Box onClick={() => handleClickProducto(producto.id_producto)}>
                                
                                <Box display='flex' justifyContent='center' sx={{ my: 2 }} width='36vh'>
                                    <Box height='36vh' width='36vh' sx={{ position: "relative" }}>
                                        <Image
                                            alt="Image Alt"
                                            src={producto.imagen} 
                                            layout="fill"
                                            objectFit="cover" // Scale your image down to fit into the container
                                            style={{ borderRadius: '30px'}}
                                        />
                                    </Box>
                                </Box>
                               
                                
                            </Box>
                        </div>
                        ))}
                    </Box>
                </Grid>
                    
                </Grid>
            </Box>
            <ModalProducto producto={producto} modal={modal} setModal={setModal}/>
            <FooterNegocios />
        </div>
    )
}

export default MenuCafeteria