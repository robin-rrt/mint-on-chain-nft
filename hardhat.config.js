require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: process.env.QUICKNODE_API_KEY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    apiKey: {
      goerli: process.env.ETHERSCAN_APIKEY,
    },
  },
};