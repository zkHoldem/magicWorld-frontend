import { Chain } from "wagmi";

export const khartes: Chain = {
  id: 145632,
  name: "khartes",
  network: "khartes",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://khartes.calderachain.xyz/http"],
    },
    default: {
      http: ["https://khartes.calderachain.xyz/http"],
    },
  },
  blockExplorers: {
    etherscan: { name: "khartes", url: "https://khartes.calderaexplorer.xyz/" },
    default: { name: "khartes", url: "https://khartes.calderaexplorer.xyz/" },
  },

  testnet: true,
};

export const mantaTest: Chain = {
  id: 3441005,
  name: "manta-testnet",
  network: "manta",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://manta-testnet.calderachain.xyz/http"],
    },
    default: {
      http: ["https://manta-testnet.calderachain.xyz/http"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "manta-testnet",
      url: "https://manta-testnet.calderaexplorer.xyz",
    },
    default: {
      name: "manta-testnet",
      url: "https://manta-testnet.calderaexplorer.xyz",
    },
  },
  testnet: true,
};

export const supChains = {
  khartes,
  mantaTest,
};
