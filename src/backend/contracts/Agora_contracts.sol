// SPDX-License-Identifier: MIT
// https://www.theengineeringprojects.com/2021/06/what-is-solidity-programming.html
// https://www.bitdegree.org/learn/solidity-examples 

pragma solidity  ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

string constant tokenName = "Agora";
string constant tokenSymbol = "AGRA";

contract Agora is ERC721(tokenName, tokenSymbol) , Ownable {
    // ___ STATE VARIABLES ____
    string  public metadataURI = "https://bafybeihzlnpv7eq5i5utkmc7xeub3gvzszjiqu6jv5rpbdhi42niefb6du.ipfs.nftstorage.link/";
    string  public baseExtension = ".json";
    address public artist;
    uint256 public royaltyFee;
    struct  MarketItem {
            uint256 tokenID;
            address payable seller; // notice the "payable" keyword
            uint256 price;
            }
    MarketItem[] public marketItems;    // define an array of type MarketItem

    /*  _______ EVENTS _______ */
    event MarketItemBought(
        uint256 indexed tokenId,
        address indexed seller,
        address buyer,
        uint256 price
    );

    /* ______ CONSTRUCTOR ________ */
    constructor(
            address   _artist,  // underscores mark arguments versus state-variables
            uint256   _royaltyFee,
            uint256[] memory _prices
            ) payable {  
                require(_prices.length * _royaltyFee <= msg.value,"deployer must pay royalty fee for each token listed ");
                royaltyFee = _royaltyFee;
                artist = _artist;
                // loop thru each price
                for ( uint8 i = 0; i < _prices.length; i++ ) {
                    require(_prices[i] > 0, "Price must be greater than 0"); // must be valid
                    _mint(address(this), i); // mint the collection item
                    marketItems.push(MarketItem(i, payable(msg.sender), _prices[i] ) ); // add it to the marketItems array
                    }
            }   

    /*   */
    function updateRoyaltyFee( uint256 _royaltyFee) external onlyOwner {
        royaltyFee = _royaltyFee;
    }

    /* ______ FUNCTIONS ________ */
    // https://youtu.be/Q_cxytZZdnc?t=3215
    function buyToken( uint256 _tokenId) external payable {
        uint256 price = marketItems[_tokenId].price;
        address seller = marketItems[_tokenId].seller;

        require(msg.value == price, "Please send the asking price in order to complete the transaction" );

        marketItems[_tokenId].seller = payable(address(0)); // zero out the seller address

        _transfer(address(this), msg.sender, _tokenId);
        payable(artist).transfer(royaltyFee);
        payable(seller).transfer(msg.value);
        emit MarketItemBought(_tokenId, seller, msg.sender, price);
    }

    function resellToken( uint256 _tokenId) external payable {
        uint256 price = marketItems[_tokenId].price;
        address seller = marketItems[_tokenId].seller;

        require(msg.value == price, "Please send the asking price in order to complete the tranaction" );

        marketItems[_tokenId].seller = payable(address(0));

        _transfer(address(this), msg.sender, _tokenId);
        payable(artist).transfer(royaltyFee);
        payable(seller).transfer(msg.value);
        emit MarketItemBought(_tokenId, seller, msg.sender, price);
    }

}