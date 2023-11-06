import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>component package</title>
        <meta
          name="description"
          content="コンポーネントをパッケージ化する練習用"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
