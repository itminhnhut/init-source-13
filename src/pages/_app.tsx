import { appWithTranslation } from "next-i18next";

import Layout from "@/components/Layout";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default appWithTranslation(App);
