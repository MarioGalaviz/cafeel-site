import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {

    const theme =  createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#5D4037',
            },
            secondary: {
                main: '#37545d',
            },
            background: {
                default: '#efebe9',
                paper: '#bcaaa4',
            },
        },
        typography: {
            fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
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




    return(
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
            <Component {...pageProps} />
        </ThemeProvider>
    
    )
}

export default MyApp
