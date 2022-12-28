require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli :{
      url: ALCHEMY_HTTP_URL,
      accounts: [PRIVATE_KEY]
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        'c22e7c3a27b58dfb19520a60787fbc3b91ff55da07fa6fb81a3277ef71bd20c5'
      ],
    }
  }
};