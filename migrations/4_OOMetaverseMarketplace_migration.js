const OOMetaverse = artifacts.require("OOMetaverse");
const PaymentGateway = artifacts.require("PaymentGateway");
const OOMetaverseMarketplace = artifacts.require("OOMetaverseMarketplace");

//first account in truffle becomes payment gateway wallet allowed to withdrawl funds
module.exports = function(deployer, networks, accounts) {
  deployer.deploy(OOMetaverseMarketplace, OOMetaverse.address, PaymentGateway.address, accounts[0]);
};   
