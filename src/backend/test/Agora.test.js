/* __________UNIT TESTS_________
   
run tests via hardhat :  $npx hardhat test

vid time https://youtu.be/Q_cxytZZdnc?t=2629
https://www.edureka.co/blog/advanced-javascript-tutorial/

____ Tech Stack & Tools _____
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
    
___________________________________________________________________*/

const { expect } = require("chai")
const { ethers } = require("hardhat")

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe("UNIT TEST : Agora Smart Contract", function () {
    const erc721Name = "Agora"
    const erc721Symbol = "AGRA"
    let smartContract
    let deployer, artist, user1, user2, users;
    let royaltyFee = toWei(0.01);
    let dataURI = "https://bafybeihzlnpv7eq5i5utkmc7xeub3gvzszjiqu6jv5rpbdhi42niefb6du.ipfs.nftstorage.link/";
    let prices = [toWei(1),
                  toWei(2),
                  toWei(3),
                  toWei(4),
                  toWei(5),
                  toWei(6),
                  toWei(7),
                  toWei(8) ];
    let deploymentFees = toWei(prices.length * 0.01)
    beforeEach(async () => {
        // instantiate ContractFactory obj
        const smartContractName = "Agora"
        const contractFactory = await ethers.getContractFactory(smartContractName);
        // Assign first 4 sample wallets(signers) to deployer, artists, users ...
        [deployer, artist, user1, user2, ...users] = await ethers.getSigners();

        // Deploy smart contract to blockchain
        smartContract = await contractFactory.deploy(
            artist.address,
            royaltyFee,
            prices,
            { value: deploymentFees }
        );
    });
    
    describe("Successfully deployed", function () {

        it("VERFIED: ERC721 name, symbol are valid", async function () {
            expect(await smartContract.name()).to.equal(erc721Name);
            expect(await smartContract.symbol()).to.equal(erc721Symbol);
        });

        it("VERFIED: Artist address, royalty fee, and data URI are valid", async function () {
            expect(await smartContract.dataURI()).to.equal(dataURI);
            expect(await smartContract.royaltyFee()).to.equal(royaltyFee);
            expect(await smartContract.artist()).to.equal(artist.address);
        });

        it("VERFIED: Number of initial audio NFTs = 8", async function () {
            expect( await smartContract.balanceOf(smartContract.address)).to.equal(8);
            // get each item in from the marketPlace array then check validity of fields
            // await Promise.all(prices.map(async (i, indx) => {
            //     const item = await nftM.marketItems(indx)
            //     expect(item.tokenId).to.equal(indx)
            //     expect(item.seller).to.equal(deployer.address)
            //     expect(item.price).to.equal(i)
            // }));
        });
        it("VERFIED: Deployment Fee(0.01 eth) total balance = "+ fromWei(deploymentFees)+" eth", async function () {
            expect( await ethers.provider.getBalance(smartContract.address)).to.equal(deploymentFees);
        });

        it("VERFIED: Audio NFT data fields are valid", async function () {
            // get each item in from the marketPlace array then check validity of fields
            // await Promise.all(prices.map(async (i, indx) => {
            //     const item = await nftM.marketItems(indx)
            //     expect(item.tokenId).to.equal(indx)
            //     expect(item.seller).to.equal(deployer.address)
            //     expect(item.price).to.equal(i)
            // }));
        });

    })

});
