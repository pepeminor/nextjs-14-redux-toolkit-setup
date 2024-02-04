import NFTMarketplaceProvider from "@/Context/ThemeContext";
import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import AppModalContextProvider from "@/Context/ModalContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "@/state/store";

export const metadata: Metadata = {
  title: "xAqua",
  description: "xAqua, bitcoin, ethereum, blockchain, web3, NFT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="theme-color" content="#FFF" />
        <meta name="msapplication-navbutton-color" content="#FFF" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#FFF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover"
        />
        <meta name="full-screen" content="yes" />
        <meta name="x5-fullscreen" content="true" />
        <meta name="360-fullscreen" content="true" />

        <meta name="screen-orientation" content="landscape" />
        <meta name="x5-orientation" content="landscape" />

        <meta name="browsermode" content="application" />
        <meta name="x5-page-mode" content="app" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <NFTMarketplaceProvider>
          <AppModalContextProvider>{children}</AppModalContextProvider>
        </NFTMarketplaceProvider>
        <ToastContainer />
        <Analytics />
        <SpeedInsights />
      </body>
      {/* <Script
        strategy="afterInteractive"
        id="google-tag"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'G-63PJBC7Z0T');
          `,
        }}
      /> */}
    </html>
  );
}
