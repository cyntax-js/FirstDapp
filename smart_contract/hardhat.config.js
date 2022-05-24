// https://eth-rinkeby.alchemyapi.io/v2/_6MUobb25jPhUHCKXpX_Bk4NNT3HCtHx;

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/1e3IvL0hRK1vRYcFEkVJxEv45pb6hmiK",
      accounts: [
        "d2c24ddef40eb46966ae3d6e84bf22a1128712ba1d809f5152ab603f84f069db",
      ],
    },
  },
};
