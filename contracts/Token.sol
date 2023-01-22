// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

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
        require(balances[msg.sender]>=_amount,"Amount is not sufficient!");
        balances[msg.sender]-=_amount;
        balances[_to]+=_amount;
    }

    function balanceOf(address _account) external view returns(uint){
        return balances[_account];
    }
}