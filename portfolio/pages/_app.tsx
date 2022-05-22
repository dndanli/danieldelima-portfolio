import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import Navbar from "../components/layout/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="navbar__wrapper">
        <Navbar />
      </div>
      <Head>
        <title>Daniel De Lima</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
