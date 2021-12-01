require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: "0.8.7",
  networks: {
    kovan: {
      url: `${process.env.ALCHEMY_KOVAN_URL}`,
      accounts: [`0x${process.env.KOVAN_PRIVATE_KEY}`],
    }
  }
};