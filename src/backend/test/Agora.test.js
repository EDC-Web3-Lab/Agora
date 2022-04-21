/* ___UNIT TESTS___
   
vid time https://youtu.be/Q_cxytZZdnc?t=2629
https://www.edureka.co/blog/advanced-javascript-tutorial/

__ Tech Stack & Tools ___
WAFFLE : library for writing and testing smart contracts.
         Sweeter, simpler and faster than Truffle.
         Works with ethers-js. 
         https://www.getwaffle.io

MOCHA : feature-rich JavaScript test framework running on Node.js
        Makes asynchronous testing simple and fun. 
        Mocha tests run serially, allowing for flexible and accurate reporting, 
        while mapping uncaught exceptions to the correct test cases.
        https://mochajs.org/ 

 CHAIjs - Assertion library :  https://www.chaijs.com/
    
*/

const { expect } = require("chai")
// var expect = chai.expect;
const { ethers } = require("hardhat")

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe("Agora", function () {
    let Agora
    let deployer, artist, user1, user2, users;
    let royaltyFee = toWei(0.01);
    let URI = "https://bafybeihzlnpv7eq5i5utkmc7xeub3gvzszjiqu6jv5rpbdhi42niefb6du.ipfs.nftstorage.link/";
    let prices = [toWei(1), toWei(2), toWei(3), toWei(4), toWei(5), toWei(6), toWei(7), toWei(8),];
    let deploymentFees = toWei(prices.length * 0.01)
    beforeEach(async function () {
        // Get the ContractFactory and signers here ...
        const NFTMarketPlaceFactory = await ethers.getContractFactory("Agora");
        [deployer, artist, user1, user2, ...users] = await ethers.getSigners();

        // Deploy music nft marketplace contract
        nftMarketplace = await NFTMarketPlaceFactory.deploy(
            royaltyFee,
            artist.address,
            prices,
            { value: deploymentFees }
        );
    });
    
    describe("Deployment", function () {
        it("Should track name, symbol, URI", async function () {
            const nftName = "Agora"
            const nftSymbol = "AGRA"
            expect(await nftMarketplace.name()).to.equal(nftName);
            expect(await nftMarketplace.symbol()).to.equal(nftSymbol);
            expect(await nftMarketplace.baseURI()).to.equal(URI);
            expect(await nftMarketplace.royaltyFee()).to.equal(royaltyFee);
            expect(await nftMarketplace.artist()).to.equal(artist.address);
        });
        
        it("Should mint then list all the audio NFTs", async function () {
            expect( await nftMarketplace.balanceOf(nftMarketplace.address)).to.equal(8);
            // get each item in from the marketPlace array then check validity of fields
            await Promise.all(prices.map(async (i, indx) => {
                const item = await nftMarketplace.marketItems(indx)
                expect(item.tokenId).to.equal(indx)
                expect(item.seller).to.equal(deployer.address)
                expect(item.price).to.equal(i)
            }));
        });

        it("Ether balance should equal deployment fees", async function () {
            expect( await ethers.provider.getBalance(nftMarketplace.address)).to.equal(deploymentFees);
        });

    })

});
