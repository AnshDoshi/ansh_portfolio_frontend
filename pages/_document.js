import Document, { Html, Head, Main, NextScript } from "next/document";
// import Meta from "../components/Meta";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html lang="en">
        <title>Ansh Doshi</title>
        <Head>
          {/* <meta name="description" content="Ansh Doshi ,Portfolio website" /> */}
          {/* <Meta /> */}
          {/* <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>

          <meta name="theme-color" content="#fff" /> */}
          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="Ansh Doshi ,Portfolio website" />
          <meta name="description" content="Ansh Doshi" />
          <meta name="keywords" content="Ansh" />

          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icon-192x192.png"
            rel="icon"
            type="image/png"
            sizes="192x192"
          />
          <link
            href="/icon-256x256.png"
            rel="icon"
            type="image/png"
            sizes="256x256"
          />
          <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
          <meta name="theme-color" content="#4a63e2" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
