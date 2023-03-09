import { Wallet, utils } from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

const PRIVATE_KEY = `0x${process.env.PRIVATE_KEY}`

console.log(process.env)

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Multicall3 contract`);

  const ethers = hre.ethers;

  // Initialize the wallet.
  const wallet = new Wallet(PRIVATE_KEY);

  // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("Multicall3");

  // Estimate contract deployment fee
  const deploymentFee = await deployer.estimateDeployFee(artifact, []);

  // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
  // `greeting` is an argument for contract constructor.
  const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
  console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

  const multicall3Contract = await deployer.deploy(artifact, []);

  //obtain the Constructor Arguments
  console.log(
    "constructor args:" + multicall3Contract.interface.encodeDeploy([])
  );

  // Show the contract info.
  const contractAddress = multicall3Contract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
