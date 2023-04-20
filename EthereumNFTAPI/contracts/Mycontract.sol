// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//creating smart contract
contract MyContract {
	uint256 private myNumber;
//defining function
	function getNumber() public view returns (uint256) {
		return myNumber;
	}

	function setNumber(uint256 _number) public {
		myNumber = _number;
	}
}
