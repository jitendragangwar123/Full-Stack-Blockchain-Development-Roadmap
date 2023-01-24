import './App.css';
import {useEffect} from "react";
const {ethers}=require("ethers");


function App() {
   useEffect(()=>{
    const ethWalletAddress="0x9cbc01d44cdaf3b14715a0a343d6a98d656891ca";
    const ethWalletABI=[
    {
      "inputs": [],
      "name": "sendEthToContract",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "sendEthToUser",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_num",
          "type": "uint256"
        }
      ],
      "name": "setNum",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "accountBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getNum",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

    const writeContract=async()=>{
      const provider=new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts",[]);
      const signer=provider.getSigner();
      const contract= new ethers.Contract(ethWalletAddress,ethWalletABI,signer);
      //await contract.setNum(10);
      //await contract.sendEthToContract({value:ethers.utils.parseEther("0.001")});

      await contract.sendEthToUser("0xD2B1F9F40249a41Ff0a626C191d2f56eeeb0EDC5",{value:ethers.utils.parseEther("0.004"),
    });
    }
    writeContract();
  },[]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
