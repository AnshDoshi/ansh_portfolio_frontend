import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <link rel="manifest" href="/manifest.json" />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
