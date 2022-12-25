// solc used for solidity compiler
solc=require("solc");
// fs used for read and write the file
fs=require("fs");
// To deploy the samart contract we need ganache
Web3=require("web3");
// To connect with the ganache 
let web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545")); 
//To read the file contents
let fileContent=fs.readFileSync("Demo.sol").toString();
console.log(fileContent);

// create an input structure for my solidity compiler
var input = {
    language: "Solidity",
    sources: {
      "Demo.sol": {
        content: fileContent,
      },
    },
  
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };
  var output = JSON.parse(solc.compile(JSON.stringify(input)));
  console.log("Output: ", output);
  
  ABI = output.contracts["Demo.sol"]["Demo"].abi;
  bytecode = output.contracts["Demo.sol"]["Demo"].evm.bytecode.object;
  console.log("Bytecode: ", bytecode);
  console.log("ABI: ", ABI);

  contract=new web3.eth.Contract(ABI);
  web3.eth.getAccounts().then((accounts)=>{
    console.log("Accounts:",accounts);
    defaultAccount=accounts[0];
    console.log("DefaultAccount:",defaultAccount);
    
    contract
    .deploy({data:bytecode})
    .send({from:defaultAccount,gas:500000})
    .on("receipt",(receipt)=>{
      console.log("Contract Address:", receipt.contractAddress);
    })
    .then((demoContract)=>{
      demoContract.methods.x().call((err,data)=>{
        console.log("Initial Value:",data);
      });
    });
 });
  
  
