// SPDX-License-Identifier: MIT
// https://www.theengineeringprojects.com/2021/06/what-is-solidity-programming.html
pragma solidity  ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Agora is ERC721("Agora", "AGRA") , Ownable {
    // ___ STATE VARIABLES ____
               // NFT.storage CID for Audio File Metadata (JSON)
    string public baseURI = 
           "https://bafybeihzlnpv7eq5i5utkmc7xeub3gvzszjiqu6jv5rpbdhi42niefb6du.ipfs.nftstorage.link/";
    string public baseExtension = ".json";
    address public artist; // solidity ethereum-address datatype
    uint256 public royaltyFee;

    struct MarketItem {
        uint256 tokenID;
        address payable seller; // notice the "payable" keyword
        uint256 price;
    }

    MarketItem[] public marketItems;    // define an array of type MarketItem

    constructor(
        address _artist,  // underscores mark arguments versus state-variables
        uint256 _royaltyFee,
        uint256[] memory _prices
    ) payable {  

    }  // 42:05
}