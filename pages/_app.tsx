import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import Head from "next/head";
import { MagicConnector } from "@thirdweb-dev/react/evm/connectors/magic";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.BinanceSmartChainMainnet;
const activeChainRPC = "https://bsc-dataseed1.ninicoin.io";

const magicLinkConnector = new MagicConnector({
  options: {
    apiKey: 'pk_live_03CBC784EC3C986B' as string,
    rpcUrls: {
      [activeChainId]: activeChainRPC,
    },
  },
});

// Array of wallet connectors you want to use for your dApp.
const connectors = [magicLinkConnector];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      walletConnectors={connectors}
      chainRpc={{
        [activeChainId]: activeChainRPC,
      }}
    >
      <Head>
        <title>SGG Crypto Payments</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
