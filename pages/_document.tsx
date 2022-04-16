import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html style={{
                padding: 0,
                margin: 0,
                width: '100vw',
                overflowX: 'hidden'
            }}>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Arvo:wght@700&wght500&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Andika+New+Basic:wght@700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@800&wght700&display=swap" rel="stylesheet" />
                </Head>
                <body style={{
                    padding: 0,
                    margin: 0,
                    width: '100vw',
                    overflowX: 'hidden'
                }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument