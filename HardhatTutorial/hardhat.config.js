/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "Import Alchemy API Key";
const GOERLI_PRIVATE_KEY ="Import Goerli Account Private Key";
module.exports = {
  solidity: "0.8.17",

  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${GOERLI_PRIVATE_KEY}`],
    },
  },
};