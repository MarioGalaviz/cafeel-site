import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}