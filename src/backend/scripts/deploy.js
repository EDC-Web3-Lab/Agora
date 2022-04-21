/* ____ Deploy Smart Contract to Blockchain _____
     Execute this script from application directory
            $ npm run deploy
      deploy script is defined in package.json
  NOTE: artifacts. file locations are defined in hardhat.config.js
*/

const { ethers } = require("hardhat");  //  Instantiate ethers Obj (already injected into hardhat)

async function main() {
  const smartContractName = "Agora"
  let deployer, artist, user1, user2, users;
  [deployer, artist, user1, user2, ...users] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  
  // Setup data to pass in to constructor
  const toWei = (num) => ethers.utils.parseEther(num.toString())
  const fromWei = (num) => ethers.utils.formatEther(num)
  let royaltyFee = toWei(0.01);
  let prices = [toWei(1),
                toWei(2),
                toWei(3),
                toWei(4),
                toWei(5),
                toWei(6),
                toWei(7),
                toWei(8) ];
  let deploymentFees = toWei(prices.length * 0.01)

  // deploy the contract
  const contractFactory = await ethers.getContractFactory(smartContractName);
  const smartContract = await contractFactory.deploy(
    artist.address,
    royaltyFee,
    prices,
    { value: deploymentFees }
  );  

  /* log address of contracts to console
     to create an instance of it in the hardhat console */
  console.log("Smart Contract Address",smartContract.address)

  /* For each contract, pass the deployed contract and name to this function
     to save a copy of the contract ABI and address to the front end. */
  saveFrontendFiles(smartContract,smartContractName);
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

  const contractArtifact = artifacts.readArtifactSync(name);  // artifacts. file locations are defined in hardhat.config.js

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
