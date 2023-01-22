const {expect}=require("chai");

describe("Token Contract", function(){
    it("Deployment should assign the total supply of tokens to the owner",async function(){
        const [owner]=await ethers.getSigners();
        console.log("Owner Object: ",owner);
        const Token= await ethers.getContractFactory("Token"); //Create Token Instance
        
        const JacobToken=await Token.deploy(); // deployment of token
        const ownerBalance=await JacobToken.balanceOf(owner.address);
        console.log("Owner Address: ",owner.address);

        expect(await JacobToken.totalSupply()).to.equal(ownerBalance);
    });
});

