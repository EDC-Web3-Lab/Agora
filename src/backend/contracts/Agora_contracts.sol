// SPDX-License-Identifier: MIT
// https://www.theengineeringprojects.com/2021/06/what-is-solidity-programming.html
pragma solidity  ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Agora is ERC721("Agora", "AGRA") , Ownable {
    // NFT.storage CID for Audio File Metadata (JSON)
    string public baseURI = 
        "https://bafybeihzlnpv7eq5i5utkmc7xeub3gvzszjiqu6jv5rpbdhi42niefb6du.ipfs.nftstorage.link/";
}