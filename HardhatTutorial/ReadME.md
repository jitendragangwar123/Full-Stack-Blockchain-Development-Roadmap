```shell
For package.json - 
>>npm init
To install hardhat - 
>>npm install --save-dev hardhat
To run hardhat - 
>>npx hardhat
To install chai and others - 
>>npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
To compile the smart contract -
>>npx hardhat compile
To deploy the smart contract -
>>npx hardhat run scripts/deploy.js
To deploy the smart contract on Goerli Network -
>>npx hardhat run scripts/deploy.js --network goerli
```
```shell
To verify the contract :-
npx hardhat verify \
--contract "contracts/MyToken.sol:GFGToken" \
--network mumbai 0x5bB6F8Fe1EE93238C18C7f40BF16f6E93Fb64Ef2

Install the following packages :-
npm install --save-dev @nomiclabs/hardhat-etherscan
npx hardhat run scripts/deploy.js --network mumbai
npm install @nomiclabs/hardhat-waffle
```
<li class="masthead__menu-item">
    <a href="https://ethereum-waffle.readthedocs.io/en/latest/matchers.html">Chai Matchers</a>
</li>
