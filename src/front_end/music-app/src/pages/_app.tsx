import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import NextNProgress from 'nextjs-progressbar';
import React from "react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
      <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
      </Head>
    <NextNProgress
        color='red'
        startPosition={0.3}
        stopDelayMs={200}
        height={1.5}
        showOnShallow={true}
        />
    <Component {...pageProps} />
  </Layout>
}
