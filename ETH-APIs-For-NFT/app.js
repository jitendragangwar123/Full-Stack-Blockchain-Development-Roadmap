const express = require('express');
const Web3 = require('web3');
const MyContractERC721 = require("./build/contracts/GFGToken721.json");
const MyContractERC1155 = require("./build/contracts/GFGToken1155.json")
const contractABIERC721 = MyContractERC721.abi;
const contractABIERC1155 = MyContractERC1155.abi;
const contractAddressERC721 = '0xED423b9551453A6eA66F9Fcb8B9bB8f011EA2591'; 
const contractAddressERC1155 = '0xF7e517F747B3F8Aa97B456DEd855b6e30eBc5547';


const rpcEndpoint = 'http://127.0.0.1:8545'; // Enter your RPC server endpoint URL here

const app = express();
const web3 = new Web3(new Web3.providers.HttpProvider(rpcEndpoint));
const contractERC721 = new web3.eth.Contract(contractABIERC721, contractAddressERC721);
const contractERC1155 = new web3.eth.Contract(contractABIERC1155, contractAddressERC1155);
app.use(express.json());


// ERC1155 Token API's
app.post('/setURIERC1155',async(req,res)=>{
    const { newuri } = req.body;
    const accounts = await web3.eth.getAccounts();
    const newURI=await contractERC1155.methods.setURI(newuri).send({from:accounts[0],gas:500000});
    console.log("newURI :",newURI);
    res.json({ URI:newURI,message: 'URI Set successfully!!' });
})

app.post('/mintERC1155',async(req,res)=>{
    const {account,id,amount,data} = req.body;
    const accounts = await web3.eth.getAccounts();
    const mintNFT=await contractERC1155.methods.mint(account,id,amount,data).send({from:accounts[0]});
    console.log("Minted NFT :",mintNFT);
    res.json({mintnft:mintNFT,message:"NFT minted Successfully!"});
})

app.post('/mintBatchERC1155',async(req,res)=>{
    const {to,ids,amounts,data} = req.body;
    const accounts = await web3.eth.getAccounts();
    const mintBatchNFT=await contractERC1155.methods.mint(to,ids,amounts,data).send({from:accounts[0]});
    console.log("Minted Batch NFT :",mintBatchNFT);
    res.json({mintnft:mintBatchNFT,message:"Batch NFT minted Successfully!"});
})

app.post('/transferOwnershipERC1155',async(req,res)=>{
    const {newOwner}=req.body;
    const accounts = await web3.eth.getAccounts();
    const transOwnership=await contractERC1155.methods.transferOwnership(newOwner).send({from:accounts[0]});
    console.log("Transfer Ownership :",transOwnership);
    res.json({transOwnership:transOwnership,message:"Ownership transfer Successfully!"});
})

app.get('/balanceOfERC1155',async (req,res)=>{
    const account = req.param("account");
    const id=req.param("id");
    const balanceof=await contractERC1155.methods.balanceOf(account,id).call();
    console.log("Get Balance :",balanceof);
    res.json({bal:balanceof,message:"Return total token of the owner!"});
})

app.get('/supportInterfaceERC1155',async (req,res)=>{
    const interfaceId = req.param("interfaceId");
    const isERC1155=await contractERC1155.methods.supportsInterface(interfaceId).call();
    console.log("Is ERC1155 :",isERC1155);
    res.json({isERC1155:isERC1155,message:"Check the ERC1155 is valid or not!"});
})

app.get('/uriERC1155',async (req,res)=>{
    const id=req.param("id");
    const URI=await contractERC1155.methods.uri(id).call();
    console.log("Token URI :",URI);
    res.json({URI:URI,message:"Return the URI of ERC1155 Token!"});
})

// ERC721 Token API's
app.post('/mintERC721', async (req, res) => {
    const { to,_uri } = req.body;
    const accounts = await web3.eth.getAccounts();
    const mintNFTERC721 = await contractERC721.methods.safeMint(to,_uri).send({from: accounts[0],gas:500000});
    console.log("Minted NFT :",mintNFTERC721);
    res.json({ mintNFT: mintNFTERC721,message: 'NFT mint successfully!!' });
});

app.post('/transferOwnershipERC721', async (req, res) => {
    const {newOwner} = req.body;
    const accounts = await web3.eth.getAccounts();
    const transferownership = await contractERC721.methods.transferOwnership(newOwner).send({from: accounts[0],gas:500000});
    console.log("Transfer Ownership :",transferownership);
    res.json({ transferownership: transferownership,message: 'Ownership trasnfered successfully!!' });
});

app.post('/transferFromERC721', async (req, res) => {
    const {from,to,tokenID} = req.body;
    const accounts = await web3.eth.getAccounts();
    const transferFromNFTERC721 = await contractERC721.methods.transferFrom(from,to,tokenID).send({from: accounts[0],gas:500000});
    console.log("NFT Transfered :",transferFromNFTERC721);
    res.json({ safeTransferFromNFTERC721: transferFromNFTERC721,message: 'NFT transfered successfully!!' });
});

app.get('/nameSymbolOwnerERC721',async (req,res)=>{
    const name=await contractERC721.methods.name().call();
    const symbol=await contractERC721.methods.symbol().call();
    const owner=await contractERC721.methods.owner().call();
    console.log("Name :",name,"Symbol :",symbol,"Owner :",owner);
    res.json({nftName:name,nftSymbol:symbol,nftOwner:owner, message:"NFT Name and Symbol fetch successfully!"});
})

app.get('/tokenURIERC721',async (req,res)=>{
    const tokenCount=req.param("tokenCount");
    const tokenuri=await contractERC721.methods.tokenURI(tokenCount).call();
    console.log("Token URI :",tokenuri);
    res.json({tokenuri:tokenuri,message:"TokenURI fetch successfully!"});
})

app.get('/balanceOfERC721',async (req,res)=>{
    const owner=req.param("owner");
    const numberOfToken=await contractERC721.methods.balanceOf(owner).call();
    console.log("Number of Tokens :",numberOfToken);
    res.json({numberOfToken:numberOfToken,message:"Balance of the owner fetch successfully!"});
})

app.get('/ownerOfERC721',async (req,res)=>{
    const tokenID=req.param("tokenId");
    const ownerOfToken=await contractERC721.methods.ownerOf(tokenID).call();
    console.log("Owner of the NFT :",ownerOfToken);
    res.json({ownerOfToken:ownerOfToken,message:"Owner of the NFT fetch successfully!"});
})

app.get('/supportsInterfaceERC721',async (req,res)=>{
    const interfaceId=req.param("interfaceId");
    const isERC721=await contractERC721.methods.supportsInterface(interfaceId).call();
    console.log("isERC721 :",isERC721);
    res.json({isERC721:isERC721,message:"Check the ERC721 is valid or not!"});
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
