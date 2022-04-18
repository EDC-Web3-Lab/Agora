# `Agora` 


Agora is a Web3 NFT Market 
# Web3 NodeJS App Framework
https://youtu.be/Q_cxytZZdnc

## Tech Stack  
+ Node  : javascript runtime
+ React : front-end components
+ Ether.js : Etherium JS library
+ Solidity : smart contract programming
+ OpenZeppelin : Solidity Smart Contract lib https://docs.openzeppelin.com/contracts/4.x/
+ HardHat.org : Etherium local development environment https://hardhat.org/getting-started/#installation
+ car.ipfs.io  : create initial NFT metadata file(.car) from JSON metadata
+ NFT.storage  : store NFT metadata in CAR files. Creates URI address 
## DevOps Setup (linux)
- install nvm
    > sudo aspt install curl 

    >curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
    
    >nvm -v

- install node using nvm
    > nvm install node

    > nvm current
- verify node & npm(bundled) versions
    > node -v

    > npm -v
- install Hardhat   https://hardhat.org/getting-started/#installation
    > npm install --save-dev hardhat@2.8.4

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
    > npm install @openzeppelin/contracts@4.5.0