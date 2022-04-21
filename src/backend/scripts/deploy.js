// instantiate ethers Object from hardhat node
//  https://docs.ethers.io
// ethers class is already injected into hardhat node
// file locations are defined in hardhat.config.js

const { ethers } = require("hardhat");

async function main() {

  // const [deployer] = await ethers.getSigners();
  let deployer, artist, user1, user2, users;
  [deployer, artist, user1, user2, ...users] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  
  
  // _____ deploy contracts to the blockchain here: ________
  // Setup data to pass in to constructor
  const toWei = (num) => ethers.utils.parseEther(num.toString())
  const fromWei = (num) => ethers.utils.formatEther(num)
  let royaltyFee = toWei(0.01);
  let URI = "https://bafybeihzlnpv7eq5i5utkmc7xeub3gvzszjiqu6jv5rpbdhi42niefb6du.ipfs.nftstorage.link/";
  let prices = [toWei(1), toWei(2), toWei(3), toWei(4), toWei(5), toWei(6), toWei(7), toWei(8),];
  let deploymentFees = toWei(prices.length * 0.01)

  const NFTMarketPlaceFactory = await ethers.getContractFactory("Agora");
  const nftMarketplace = await NFTMarketPlaceFactory.deploy(
    artist.address,
    royaltyFee,
    prices,
    { value: deploymentFees }
  );  

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
