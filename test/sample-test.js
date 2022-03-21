const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Convert", function () {
  it("Should return the new convert once it's changed", async function () {
    const Convert = await ethers.getContractFactory("Convert");
  });
});
