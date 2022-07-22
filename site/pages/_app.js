import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import AsignarDevice from '../components/AsignarDevice';
import Aos from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {



    const theme =  createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#7E57C2',
                old: '#8656ac',
                dark: '#4527a0',
                darker: '#441979'
            },
            secondary: {
                main: '#8bb24f',
            },
            background: {
                light: '#ede7f6',
                paper: '#d1c4e9',
            },
            triadic1: {
                main: '#c2579b'
            },
            triadic2: {
                main: '#c27e57'
            }
        },
        typography: {
            fontFamily: '"PlusJakartaSans", "Helvetica", "Arial", sans-serif',
            h1: {
                fontWeight: 500,
            },
        },
    })

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
        Aos.init({ duration: 1200 })
    }, []);


    let persistor = persistStore(store);

    return(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                
                <CssBaseline />
                <AsignarDevice />
                {/* <PersistGate loading={null} persistor={persistor}> */}
                <Component {...pageProps} />
                {/* </PersistGate> */}
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
