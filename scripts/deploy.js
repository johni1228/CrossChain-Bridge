// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  /* --------------------Token Contract --------------------- */
  /*
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy("BridgeToken", "BT");

  await token.deployed();

  await hre.run('verify:verify', {
    address: token.address,
    constructorArguments: ["BridgeToken", "BT"],
  });

  console.log("Token deployed to:", token.address);
  */


  /* --------------------Controller Contract -------------- */
  /*
  const Controller = await hre.ethers.getContractFactory("Controller");
  const controller = await Controller.deploy();

  await controller.deployed();

  await hre.run('verify:verify', {
    address: controller.address,
    constructorArguments: [],
  });

  console.log("Controller deployed to:", controller.address);
  */

  /* --------------------Settings contract ---------------------- */
  /*const Settings = await hre.ethers.getContractFactory("Settings");
  const settings = await Settings.deploy(controller.address, feeAddress);

  await settings.deployed();

  await hre.run('verify:verify', {
    address: settings.address,
    constructorArguments: [controller.address, feeAddress],
  });

  console.log("Settings deployed to:", settings.address);
  */

  /* --------------------FeeController contract ---------------------- */
  /*const FeeController = await hre.ethers.getContractFactory("FeeController");
  const feeController = await FeeController.deploy(settings.address, controller.address);

  await feeController.deployed();

  await hre.run('verify:verify', {
    address: feeController.address,
    constructorArguments: [settings.address, controller.address],
  });

  console.log("FeeController deployed to:", feeController.address);
  */

  /* --------------------Deployer contract ---------------------- */
  /*const Deployer = await hre.ethers.getContractFactory("Deployer");
  const deployer = await Deployer.deploy(controller.address);

  await deployer.deployed();

  await hre.run('verify:verify', {
    address: deployer.address,
    constructorArguments: [controller.address],
  });

  console.log("Deployer deployed to:", deployer.address);
  */

  /* --------------------BridgePool contract ---------------------- */
  /*const BridgePool = await hre.ethers.getContractFactory("BridgePool");
  const bridgePool = await BridgePool.deploy(controller.address);

  await bridgePool.deployed();

  await hre.run('verify:verify', {
    address: bridgePool.address,
    constructorArguments: [controller.address],
  });

  console.log("BridgePool deployed to:", bridgePool.address);
  */

  /* --------------------Bridge contract ---------------------- */
  /*const Bridge = await hre.ethers.getContractFactory("Bridge");
  const bridge = await Bridge.deploy(controller.address);

  await bridge.deployed();

  await hre.run('verify:verify', {
    address: bridge.address,
    constructorArguments: [controller.address],
  });

  console.log("Bridge deployed to:", bridge.address);
  */

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
