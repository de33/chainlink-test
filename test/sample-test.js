const { ethers } = require("hardhat");

const {BigNumber} = ethers;

describe("PriceConsumerV3", function() {
  it("should return the price", async function(){
    const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3")
    const pc = await PriceConsumerV3.deploy();
    await pc.deployed();

    const thePrice = await pc.getThePrice();
    const formatted = thePrice.div(BigNumber.from(10).pow(8)).toString();

    console.log(formatted);
  })
})