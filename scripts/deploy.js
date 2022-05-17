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
  const Bridge = await hre.ethers.getContractFactory("Bridge");
  const bridge = await Bridge.deploy(
    "0x08C864D7eeC401D0f98A6a79D86Db1F59d7c988f",
    "0x7c058BeF1348f8944a1C2C0afb5bc164a07Ff4F6",
    "0x37E950F09a9C6e64507D97C50ECEFC9a3b51a947",
    "0xBE45B4C494AE9e05821295A606341ac43c00E8AA",
    "0x188438E7C850ff20Dc4177Df942286962898b7dE",
    "0x51eDDBeFD3c237F3144ef6e95B3c5Fa80d86a490",
    "0x0000000000000000000000000000000000000000");

  await bridge.deployed();

  await hre.run('verify:verify', {
    address: bridge.address,
    constructorArguments: ["0x08C864D7eeC401D0f98A6a79D86Db1F59d7c988f",
    "0x7c058BeF1348f8944a1C2C0afb5bc164a07Ff4F6",
    "0x37E950F09a9C6e64507D97C50ECEFC9a3b51a947",
    "0xBE45B4C494AE9e05821295A606341ac43c00E8AA",
    "0x188438E7C850ff20Dc4177Df942286962898b7dE",
    "0x51eDDBeFD3c237F3144ef6e95B3c5Fa80d86a490",
    "0x0000000000000000000000000000000000000000"],
  });

  console.log("Bridge deployed to:", bridge.address);
  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
