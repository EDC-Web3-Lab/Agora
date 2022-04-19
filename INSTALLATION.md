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

## Running Hardhat 
+ Starts a local ethereum node for testing
+ Must be running a version of nodeJS supported by Hardhat
-    > npx hardhat node
## START the React App
+ > NodeJS must be running
+ > cd to the application directory
+ > npm run start
