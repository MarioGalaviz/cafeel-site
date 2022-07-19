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

function MyApp({ Component, pageProps }) {



    const theme =  createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#7E57C2',
                old: '#8656ac'
            },
            secondary: {
                main: '#8bb24f',
            },
            background: {
                light: '#ede7f6',
                paper: '#d1c4e9',
            },
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

    }, []);


    let persistor = persistStore(store);

    return(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Head>
                    <link rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin />
                    <link rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap" />

                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap"
                        media="print" onLoad="this.media='all'" />

                    <noscript>
                    <link rel="stylesheet"
                            href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap" />
                    </noscript>
                    <link rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons" />

                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                        media="print" onLoad="this.media='all'" />

                    <noscript>
                    <link rel="stylesheet"
                            href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    </noscript>
                </Head>
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
