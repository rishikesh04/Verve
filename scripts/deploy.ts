// BRANDIFY/scripts/deploy.ts

const { ethers } = require("hardhat");
// The main function that handles the deployment.
async function main() {
  // This is the official address for the cUSD token on the Celo Sepolia testnet.
  // Our contract's constructor needs this address to know which token to use for rewards.
  const celoSepoliaCUSDAddress = "0x6a4054556A55a95B5b9122557769578c7a223f66";

  console.log("Preparing to deploy the EngageFiChallenges contract...");

  // Hardhat automatically knows which account to use from the PRIVATE_KEY in your .env file.
  // We get this account, known as the "deployer," to confirm its address.
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString()); // Let's check the balance to make sure we have gas.

  // A "ContractFactory" is an abstraction used to deploy new smart contracts.
  // Here, we get the factory for our EngageFiChallenges contract.
  const EngageFiChallengesFactory = await ethers.getContractFactory("EngageFiChallenges");

  // This is the line that actually deploys the contract.
  // We call the .deploy() method on the factory and pass the cUSD address to the constructor.
  console.log(`Deploying EngageFiChallenges with cUSD address: ${celoSepoliaCUSDAddress}`);
  const engageFiChallengesContract = await EngageFiChallengesFactory.deploy(celoSepoliaCUSDAddress);

  // We wait for the contract deployment transaction to be officially included in a block on the blockchain.
  await engageFiChallengesContract.deployed();

  // Finally, we print the address of our newly deployed contract. This is the most important piece of information.
  console.log("✅ EngageFiChallenges contract deployed successfully!");
  console.log("📜 Contract Address:", engageFiChallengesContract.address);
}

// This is a standard pattern in modern JavaScript to handle asynchronous code and errors.
main().catch((error) => {
  console.error("An error occurred during deployment:", error);
  process.exitCode = 1;
});