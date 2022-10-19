import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("MyToken", function () {
  it("Should return token name", async function () {
    const ContractFactory = await ethers.getContractFactory("MyToken");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();

    expect(await instance.name()).to.equal("MyToken"); // based on user provided contract name
  });
});
