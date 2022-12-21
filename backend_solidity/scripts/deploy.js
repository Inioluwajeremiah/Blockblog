// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const main = async () => {
  const BlockNetwork = await hre.ethers.getContractFactory("BlockNetwork");
  const blockNetwork = await BlockNetwork.deploy();
  await blockNetwork.deployed();
  console.log(`Transactions deployed to ${blockNetwork.address}`);
  // Transactions deployed to 0x723146f6ec351740B12EF0A42e09ae63a43B31fe
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

const mainResult = async () => {
  try {
    await main();
    process.exitCode = 0;
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}
mainResult();

