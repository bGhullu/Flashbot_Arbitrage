require("dotenv").config(); // Load environment variables from .env file
const { ethers } = require("hardhat");

async function deployBundle() {
  const BundleExecutor = await ethers.getContractFactory("BundleExecutor");
  const bundleExecutor = await BundleExecutor.deploy();
  await bundleExecutor.deployed();
  console.log("BundleExecutor contract deployed:", bundleExecutor.address);
}

deployBundle()
  .then(() => {
    console.log("Deployment completed successfully.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error deploying contract:", error);
    process.exit(1);
  });
