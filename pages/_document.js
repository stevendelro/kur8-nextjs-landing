import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content="#fff" />
          <meta
            name="description"
            content="A developer tool used to visualize Kubernetes topology and Prometheus derived metrics as customized graphs and tables"
          />
          <meta
            name="title"
            property="og:title"
            content="KUR8 | A Visual Kubernetes/Prometheus Dashboard"
          />
          <meta property="og:type" content="website" />
          <meta
            name="image"
            property="og:image"
            content="https://priontyl.sirv.com/Images/kur8.png"
          />
          <meta
            name="description"
            property="og:description"
            content="KUR8 | A Visual Kubernetes/Prometheus Dashboard"
          />
          <meta name="author" content="Team KUR8" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}
