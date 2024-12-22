// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.28",
// };

require('@nomicfoundation/hardhat-ethers');
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  defaultNetwork: "localhost",
  networks: {
    hardhat: {},
    quicknode: {
      url: process.env.QUICKNODE_URL,
      accounts: [`${process.env.DEPLOYER_PRIVATE_KEY}`],
    },
  },
  solidity: "0.8.28",
};
