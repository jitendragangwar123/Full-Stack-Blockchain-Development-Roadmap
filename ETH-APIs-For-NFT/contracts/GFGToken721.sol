// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
/// @title A contract for demonstrate ERC721 Token
/// @author Jitendra Kumar
/// @notice For now, this contract just show how to create an ERC721 Token
contract GFGToken721 is ERC721,ERC721URIStorage, Ownable {
	using Counters for Counters.Counter;
	Counters.Counter private _tokenCountCounter;

	//set the NFT name and symbol
	constructor() ERC721("GFGToken", "GFG") {}
	//mint the NFT using Owner Address
	function safeMint(address to,string memory _uri) public onlyOwner{
		uint256 tokenCount = _tokenCountCounter.current();
		_tokenCountCounter.increment();
		_safeMint(to, tokenCount);
		_setTokenURI(tokenCount, _uri);
	}
	
	function _burn(uint256 tokenCount) 
		internal override(ERC721, ERC721URIStorage) {
		super._burn(tokenCount);
	}

	function tokenURI(uint256 tokenCount) 
		public view override(ERC721, ERC721URIStorage)
	 	returns (string memory)
	{
		return super.tokenURI(tokenCount);
	}
}
