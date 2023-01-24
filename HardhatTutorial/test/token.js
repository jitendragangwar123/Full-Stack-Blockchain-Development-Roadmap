const {expect}=require("chai");

describe("Token Contract ",function(){
    let Token;
    let jacobToken;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function(){
        Token=await ethers.getContractFactory("Token");
        [owner,addr1,addr2,...addrs]=await ethers.getSigners();
        jacobToken= await Token.deploy();
    });

    describe("Deployment",function(){
        it("Should set the right owner",async function(){
            expect(await jacobToken.owner()).to.equal(owner.address);
        });

        it("Should assign the totalSupply to the owner",async function(){
            const totalBalance=await jacobToken.balanceOf(owner.address);
            expect(await jacobToken.totalSupply()).to.equal(totalBalance);
        });
    });

    describe("Transactions",function(){
        it("Should transfer token between accounts", async function(){
            await jacobToken.transfer(addr1.address,10);
            const addr1Balance=await jacobToken.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(10);

            await jacobToken.connect(addr1).transfer(addr2.address,5);
            const addr2Balance=await jacobToken.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(5);
        });

        it("Should fail if the sender have not enough balance",async function(){
            const initialOwnerBalance=await jacobToken.balanceOf(owner.address);
            await expect(jacobToken.connect(addr1).transfer(owner.address,1)).to.be.revertedWith("Amount is not sufficient!");
            expect(await jacobToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
        });

        it("Should update balances after transactions",async function(){
            const initialOwnerBalance=await jacobToken.balanceOf(owner.address);
            await jacobToken.transfer(addr1.address,10);
            await jacobToken.transfer(addr2.address,20);

            const finalOwnerBalance=await jacobToken.balanceOf(owner.address);

            expect(finalOwnerBalance).to.equal(initialOwnerBalance-30);

            const addr1Balance=await jacobToken.balanceOf(addr1.address);
            const addr2Balance=await jacobToken.balanceOf(addr2.address);
            expect(addr1Balance).to.equal(10);
            expect(addr2Balance).to.equal(20);
        });
    });
});


// describe("Token Contract", function(){
//     it("Deployment should assign the total supply of tokens to the owner ",async function(){
//         const [owner]=await ethers.getSigners();
//         //console.log("Owner Object: ",owner);
//         const Token= await ethers.getContractFactory("Token"); //Create Token Instance
        
//         const jacobToken=await Token.deploy(); // deployment of token
//         const ownerBalance=await jacobToken.balanceOf(owner.address);
//         //console.log("Owner Address: ",owner.address);

//         expect(await jacobToken.totalSupply()).to.equal(ownerBalance);
//     });

//     it("Should transfer tokens between accounts ",async function(){
//         const [owner,addr1,addr2]=await ethers.getSigners();
//         const Token= await ethers.getContractFactory("Token"); //Create Token Instance
        
//         const jacobToken=await Token.deploy(); // deployment of token
//         await jacobToken.transfer(addr1.address,10);
//         expect(await jacobToken.balanceOf(addr1.address)).to.equal(10);

//         await jacobToken.connect(addr1).transfer(addr2.address,5);
//         expect(await jacobToken.balanceOf(addr2.address)).to.equal(5);
//     });
// });

