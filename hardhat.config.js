require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.6.7",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/<key>",
        blockNumber: 12692665
      }
    }
  }
};