//SPDX-License-Identifier: Unlicense
pragma solidity ^0.6.7;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";


contract PriceConsumerV3{
  AggregatorV3Interface internal priceFeed;

  constructor() public {
    priceFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419);
  }

  function getThePrice() public view returns (int) {
    (,int price,,,) = priceFeed.latestRoundData();
    return price;
  }
}
