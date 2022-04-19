# `Agora` DevOps Setup (linux)

## Install dependencies
- Install nvm   NodeJS version manager
    > $ sudo apt install curl 

    > $ curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
    
    > $ nvm -v

- Install nodeJS using nvm
    > $ nvm install node

    > $ nvm current
- Verify node & npm(bundled) versions
    > $ node -v

    > $ npm -v
- Install Hardhat   https://hardhat.org/getting-started/#installation
    > $ npm install --save-dev hardhat@2.8.4

- (if necessary) install and enable MetaMask chrome extension https://metamask.io

- cd to project folder and clone this repo
    > $ git clone https://github.com/EDC-Web3-Lab/Agora.git

- Install npm dependencies 
    > $ npm install
- Install identicon.js
    > $ npm install indenticon.js
- Install React router components  (version 6)
    > $ npm install react-router-dom@6
- Install Openzeppelin Smart Contract library
    > $ npm install @openzeppelin/contracts@4.5.0

## Launch a local blockchain node
### Hardhat 
+ Start a local ethereum node for testing
    > $ npx hardhat node
+ Must be running a version of nodeJS supported by Hardhat
+ Smart Contracts/Tokens must be deployed to the blockchain using deploy.js before launching the application
+ Hardhat javascript console
    > $ npx hardhat console --network localhost
    >& const contract = 

## Smart Contract development workflow
+ Modify smart contract code in Agora_contracts.sol
+ If not already there, add smart contract to deploy.js . Location is commented.
+ Compile & deploy to executing hardhat process.
    > $npm run deploy
+ deploys using first demo wallet account 
+ Note Smart contract address for next step
+ Verify deployment using hardhat console
  > $ npx hardhat console --network localhost
  >>const contract = await ethers.getContractAt(".sol contract name","smart contract address")

 
## Start the Application
+ NodeJS must be installed and running
+ From the application directory
    > $npm run start
## Sample Application Data
    + IPFS  : create initial NFT metadata file(.car) from JSON metadata https://car.ipfs.io 
    + NFT.storage  : store NFT metadata in .car files. https://NFT.storage/new-file/
        * Create a new account and login to upload metadata files
        * Creates URI address accessed by smart contract code