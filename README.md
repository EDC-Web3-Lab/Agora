# Agora
## Web3 Application Framework : NFT Marketplace
https://youtu.be/Q_cxytZZdnc
### Tech Stack
    Node 
    React components
    Ether.js
    Solidity : smart contract programming
    OpenZeppelin (Solidity Smart Contract lib)

    car.ipfs.io  : create initial NFT metadata file(.car) from JSON metadata
    NFT.storage  : store NFT metadata in CAR files
                   creates URI
### DevOps Setup (linux)
- install nvm
    > sudo apt install curl 

    >curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
    
    >nvm -v

- install node using nvm
    > nvm install node

    > nvm current
- verify node & npm versions
    > node -v

    > npm -v
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