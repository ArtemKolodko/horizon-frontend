import { createContext } from "react";
import { ConfigStore } from "./ConfigStore";
import { WalletStore } from "./WalletStore";

export const rootStoreContext = createContext({
  configStore: new ConfigStore(),
  walletStore: new WalletStore(),
});
