// const hre = require("hardhat");

// async function main() {
//   // Get the contract factory
//   const Voting = await hre.ethers.getContractFactory("Voting");

//   // Deploy the contract
//   const voting = await Voting.deploy();

//   // Wait for the deployment to be mined
//   await voting.deployTransaction.wait();

//   // Log the contract address
//   console.log(`Voting contract deployed to: ${voting.address}`);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


const hre = require("hardhat");

async function main() {
    const deployedContract = await hre.ethers.deployContract("Voting");

    await deployedContract.waitForDeployment();

    console.log(`Voting Contract deployed to ${deployedContract.target}`);

    
}
main().catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });