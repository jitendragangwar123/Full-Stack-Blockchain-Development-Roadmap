const ERC721Token=artifacts.require("GFGToken721");
const ERC1155Token=artifacts.require("GFGToken1155");

module.exports=async function(deployer){
    await deployer.deploy(ERC721Token);
    await deployer.deploy(ERC1155Token)
}