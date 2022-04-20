// instantiate ethers Object from hardhat node
//  https://docs.ethers.io
// ether class is already injected into hardhat node
// file locations are defined in hardhat.config.js

const { ethers } = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  
  
  // deploy contracts to the blockchain here:
  const NFTMarketPlaceFactory = await ethers.getContractFactory("Agora");
  const nftMarketplace = await NFTMarketPlaceFactory.deploy();  

  // log address of contracts to console
  // to create an instance of it in the hardhat console
  console.log("Smart Contract Address",nftMarketplace.address)

  // For each contract, pass the deployed contract and name to this function to save a copy of the contract ABI and address to the front end.
  saveFrontendFiles(nftMarketplace,"Agora");
}

function saveFrontendFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../frontend/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
