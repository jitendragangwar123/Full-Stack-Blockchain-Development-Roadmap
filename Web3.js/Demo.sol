//SPDX-Licence-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Demo{
    uint public x=10;
    function setValue(uint _x) public{
        x=_x;
    }
}


//Interact with Web3.js
/* Start the ganache-cli and select the ganache for web3 provider in Remix IDE before deploying the samart contract. 
> let Web3=require("web3");
> let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
> let contract=new web3.eth.Contract(ABI,"Deployed Contract Address");
> contract.methods.x().call().then(console.log); //10
> contract.methods.setValue(50).send({from:"0x3fA9c400C72ea6d43FdB55B440eeC2a86E6bA600"}); //50
*/
