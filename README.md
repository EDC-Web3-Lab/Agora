# `Agora` 

A full-stack Dapp framework consisting of a React front-end running on NodeJS that accesses smart contracts on an etherium compatible blockchain


This sample application models an online marketplace where a user can connect a metamask wallet to buy & sell audio NFTs using Agora (symbol:AGRA), a fictitious cryptocurrency.
# Framework for Web3 Applications
https://youtu.be/Q_cxytZZdnc

## Tech Stack  
+ NodeJS  : javascript runtime (backend) Version 16.14.2
+ React : front-end component-based framework
+ Ethers.js : Etherium Blockchain library https://docs.ethers.io
+ Solidity : smart contract programming
+ OpenZeppelin : Solidity lib for Etherium Smart Contracts  https://docs.openzeppelin.com/contracts/4.x/
+ HardHat.org Version: 2.9.3 
    + Etherium local development environment https://hardhat.org/getting-started/#installation
+ SAMPLE DATA
    + IPFS  : create initial NFT metadata file(.car) from JSON metadata https://car.ipfs.io 
    + NFT.storage  : store NFT metadata in .car files. https://NFT.storage/new-file/
        * Create a new account and login to upload metadata files
        * Creates URI address accessed by smart contract code
