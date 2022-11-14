## Web3.js
### Topics :- 
### Web3.js:- 
```shell
         :- Web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP,IPC or WebSocket.
         :- Web3.js provides the interface between real world(website) and your smart contracts.
```  
1. Make package.json file:-
```shell
npm init -y
```
2.To install web3:- 
```shell
npm install --save web3
```
3.To import web3:- 
```shell
let Web3 =require("web3");
```
4.To connect with Ganache:- 
```shell
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")); [Remember that the ganache must be running]
```

5.To get the balance of an account:- 
```shell
web3.eth.getBalance("paste the address of the account inside it").then(console.log);
```

6.To convert wei into ether:- 
```shell
web3.eth.getBalance("paste the address of the account inside it").then(function(result) {console.log(web3.utils.fromWei(result,"ether"));})
```

7.To transfer ether from one account to another:- 
```shell
web3.eth.sendTransaction({from:"paste the address of the account inside it",to:"paste the address of the account inside it",value:web3.utils.toWei("1","ether")});4
```

