const {ethers}=require("ethers");
const provider=new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/0b4240052bba4066b1a5edfa97d91a73");

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

const ethWalletInteraction=async()=>{
    const ethWalletContract=new ethers.Contract(ethWalletAddress,ethWalletABI,provider);
    
    const contractName= await ethWalletContract.name();
    console.log("Contract Name: ",contractName);

    const numValue=await ethWalletContract.getNum();
    console.log("Num Value: ",numValue);

    //use typeconversion
    console.log("Num Value: ",String(numValue));

    const contractBalance=await ethWalletContract.contractBalance();
    console.log("Contract Balance: ",contractBalance);
    const contractBalanceEther=ethers.utils.formatEther(contractBalance);
    console.log("contractBalance in Ether: ",contractBalanceEther);

    const userBalance=await ethWalletContract.accountBalance("0xB04Ba78b7413C3265ffC1293a4659dEA54Ef0851");
    console.log("Account Balance: ",userBalance);
    const userBalanceEther=ethers.utils.formatEther(userBalance);
    console.log("userBalance in Ether: ",userBalanceEther);
}

ethWalletInteraction();