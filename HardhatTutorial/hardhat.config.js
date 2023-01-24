/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "uduRhmNnl8azihjkwopZ_kOPu1vO9npn";
const GOERLI_PRIVATE_KEY ="d23e50e8dd7757e91062108e5eac0998ecd76138e80fb592dc963aa3592b60a8";
module.exports = {
  solidity: "0.8.17",

  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${GOERLI_PRIVATE_KEY}`],
    },
  },
};