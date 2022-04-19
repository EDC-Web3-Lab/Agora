# `Agora` 

## DevOps Setup (linux)
- install nvm   NodeJS version manager
    > $ sudo apt install curl 

    > $ curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
    
    > $ nvm -v

- install nodeJS using nvm
    > $ nvm install node

    > $ nvm current
- verify node & npm(bundled) versions
    > $ node -v

    > $ npm -v
- install Hardhat   https://hardhat.org/getting-started/#installation
    > $ npm install --save-dev hardhat@2.8.4

- (if necessary) install and enable MetaMask chrome extension https://metamask.io

- cd to project folder and clone repo
    > $ git clone https://github.com/EDC-Web3-Lab/Agora.git

- install npm dependencies 
    > $ npm install
- install identicon.js
    > $ npm install indenticon.js
- install React router components  (version 6)
    > $ npm install react-router-dom@6
- install Openzeppelin Smart Contract library
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

## Start the Application
+ NodeJS must be installed and running
+ From the application directory
    > $npm run start

## Smart Contract development workflow
+ Modify smart contract code in Agora_contracts.sol
+ If necessary, add smart contract to deploy.js . Location is commented.
+ Compile & deploy to executing hardhat process.
    > $npm run deploy
+ Note Smart contract address for next step
+ Verify deployment using hardhat console
  > $ npx hardhat console --network localhost
  >>const contract = await ethers.getContractAt("smart contract name","smart contract address")