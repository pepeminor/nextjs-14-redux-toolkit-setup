"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { base } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ThemeProvider, StyleSheetManager } from "styled-components";
import { Provider } from "react-redux";
import { store } from "@/state/store";

interface IInputDeploy {
  nameTick: string;
  totalSupply: string;
  limitPerMint: string;
}

interface ITheme {
  colors: {
    color: string;
    gray_3: string;
    gray_2: "#C2C2C2";
    yellow: string;
    lightYellow: string;
  };
  backgrounds: {
    main: string;
  };
  fontSize: string;
}

interface NFTMarketplaceProps {
  theme: ITheme | undefined;
  toggleTheme: () => void;

  ethUSD: string | undefined;
  setEthUSD: Dispatch<SetStateAction<string | undefined>>;
}

const { chains, publicClient } = configureChains([base], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "a2a3cef49f341967a33b7263c1dba574",
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export const ThemeContext = createContext({} as NFTMarketplaceProps);

const lightTheme: ITheme = {
  colors: {
    color: "#000",
    gray_3: "#525252",
    gray_2: "#C2C2C2",
    yellow: "#FCFC03",
    lightYellow: "#FCFDC7",
  },
  backgrounds: {
    main: "#F2F4F6",
  },
  fontSize: "16px",
};

const darkTheme: ITheme = {
  colors: {
    color: "#fff",
    gray_3: "#525252",
    gray_2: "#C2C2C2",
    yellow: "#FCFC03",
    lightYellow: "#FCFDC7",
  },
  backgrounds: {
    main: "#F2F4F6",
  },
  fontSize: "16px",
};

const ThemeContextProvider: React.FC<any> = ({ children }) => {
  const [ethUSD, setEthUSD] = useState<string>();

  const [theme, setTheme] = useState<ITheme>(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyleSheetManager>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
              <ThemeContext.Provider
                value={{
                  ethUSD,
                  setEthUSD,
                  theme,
                  toggleTheme,
                }}
              >
                {children}
              </ThemeContext.Provider>
            </RainbowKitProvider>
          </WagmiConfig>
        </StyleSheetManager>
      </ThemeProvider>
    </Provider>
  );
};

export default ThemeContextProvider;

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useNFTMarketplace must be used within an ThemeContextProvider",
    );
  }
  return context;
};
