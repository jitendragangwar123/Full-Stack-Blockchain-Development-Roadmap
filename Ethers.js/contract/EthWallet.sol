// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract EthWallet{
    string public name="Jay";
    uint num;

    function setNum(uint _num) public{
        num = _num;
    } 

    function getNum() public view returns(uint){
        return num;
    }

    function sendEthToContract() public payable{

    }

    function contractBalance() public view returns(uint){
        return address(this).balance;
    }

    function sendEthToUser(address _user)public payable{
        payable(_user).transfer(msg.value);
    }

    function accountBalance(address _addr) public view returns(uint){
        return _addr.balance;
}
