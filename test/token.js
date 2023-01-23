const {expect}=require("chai");

describe("Token Contract ",function(){
    let Token;
    let JacobToken;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function(){
        Token=await ethers.getContractFactory("Token");
        [owner,addr1,addr2,...addrs]=await ethers.getSigners();
        JacobToken= await Token.deploy();
    });

    describe("Deployment",function(){
        it("Should set the right owner ",async function(){
            expect(await JacobToken.owner()).to.equal(owner.address);
        });

        it("Should assign the totalSupply to the owner ",async function(){
            const totalBalance=await JacobToken.balanceOf(owner.address);
            expect(await JacobToken.totalSupply()).to.equal(totalBalance);
        });
    });

    describe("Transactions",function(){
        it("Should transfer token between accounts", async function(){
            await JacobToken.transfer(addr1.address,10);
            const addr1Balance=await JacobToken.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(10);

            await JacobToken.connect(addr1).transfer(addr2.address,5);
            const addr2Balance=await JacobToken.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(5);
        });
    });

    

});


// describe("Token Contract", function(){
//     it("Deployment should assign the total supply of tokens to the owner ",async function(){
//         const [owner]=await ethers.getSigners();
//         //console.log("Owner Object: ",owner);
//         const Token= await ethers.getContractFactory("Token"); //Create Token Instance
        
//         const JacobToken=await Token.deploy(); // deployment of token
//         const ownerBalance=await JacobToken.balanceOf(owner.address);
//         //console.log("Owner Address: ",owner.address);

//         expect(await JacobToken.totalSupply()).to.equal(ownerBalance);
//     });

//     it("Should transfer tokens between accounts ",async function(){
//         const [owner,addr1,addr2]=await ethers.getSigners();
//         const Token= await ethers.getContractFactory("Token"); //Create Token Instance
        
//         const JacobToken=await Token.deploy(); // deployment of token
//         await JacobToken.transfer(addr1.address,10);
//         expect(await JacobToken.balanceOf(addr1.address)).to.equal(10);

//         await JacobToken.connect(addr1).transfer(addr2.address,5);
//         expect(await JacobToken.balanceOf(addr2.address)).to.equal(5);
//     });


// });

