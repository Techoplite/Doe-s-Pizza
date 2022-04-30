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