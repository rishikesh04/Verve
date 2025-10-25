// BRANDIFY/hardhat.config.ts

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.18",

  networks: {
    // We are adding our custom network configuration here.
    celoSepolia: {
      url: "https://sepolia-forno.celo-testnet.org",
      accounts: [process.env.PRIVATE_KEY as string],
      chainId: 11155420,
    },
  } as any, // <-- THIS IS THE FIX! We add "as any" here.
};

export default config;