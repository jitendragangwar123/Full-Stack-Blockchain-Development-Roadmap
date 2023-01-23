// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "hardhat/console.sol";

/// @title A contract for Token creation
/// @author Jitendra Gangwar
/// @notice For now, this contract just creating the Token 

contract Token{
    string public tokenName="Jacob";
    string public tokenSymbol="JK";
    uint public totalSupply=10000;
    address public owner;

    mapping(address=>uint) balances;

    constructor(){
        balances[msg.sender]=totalSupply;
        owner=msg.sender;
    }

    function transfer(address _to,uint _amount) external{
        //for debugging the smart contract
        console.log("*Sender balance is %s Tokens*",balances[msg.sender]);
        console.log("*Sender is sending %s Tokens to %s Address*",_amount,_to);

        require(balances[msg.sender]>=_amount,"Amount is not sufficient!");
        balances[msg.sender]-=_amount;
        balances[_to]+=_amount;
    }

    function balanceOf(address _account) external view returns(uint){
        return balances[_account];
    }
}