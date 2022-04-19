# `Agora` 


Agora is a Web3 NFT Market 
# Web3 NodeJS App Framework
https://youtu.be/Q_cxytZZdnc

## Tech Stack  
+ NodeJS  : javascript runtime (backend) Version 16.14.2
+ React : front-end component-based framework
+ Ethers.js : Etherium Blockchain library https://docs.ethers.io
+ Solidity : smart contract programming
+ OpenZeppelin : Solidity lib for Etherium Smart Contracts  https://docs.openzeppelin.com/contracts/4.x/
+ HardHat.org Version: 2.9.3 
    + Etherium local development environment https://hardhat.org/getting-started/#installation
+ IPFS  : create initial NFT metadata file(.car) from JSON metadata https://car.ipfs.io 
+ NFT.storage  : store NFT metadata in .car files. https://NFT.storage/new-file/
    * Create a new account and login to upload metadata files
    * Creates URI address accessed by smart contract code
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

## Running Hardhat 
start a local ethereum node for testing
-    > npx hardhat node