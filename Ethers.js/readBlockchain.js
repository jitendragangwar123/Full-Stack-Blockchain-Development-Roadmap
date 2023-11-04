const {ethers}=require("ethers");
const provider= new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/0b4240052bba4066b1a5edfa97d91a73");

const readBlockchain = async()=>{
    const blockNumber=await provider.getBlockNumber();
    console.log("Latest BlockNumber: ",blockNumber);

    const balance=await provider.getBalance("0xB04Ba78b7413C3265ffC1293a4659dEA54Ef0851");
    console.log("Balance: ",balance);

    const balanceEther=ethers.utils.formatEther(balance);
    console.log("Balance in Ether: ",balanceEther);

    const balanceWei=ethers.utils.parseEther(balanceEther);
    console.log("Balance in Wei: ",balanceWei);
}

readBlockchain();