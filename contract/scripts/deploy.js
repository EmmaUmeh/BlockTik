const { ethers } = require("hardhat");

async function main() {
  // Get the list of signers (accounts) connected to the network
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  try {
    // Set a manual gas price if provider.getGasPrice() isn't supported
    const gasPrice = ethers.utils.parseUnits('20', 'gwei'); // Example gas price of 20 gwei

    // Deploy the Ticketing contract
    const EventTicket = await ethers.getContractFactory("EventTicket");
    const ticketingContract = await EventTicket.deploy(deployer.address, {
      gasLimit: 5000000, // Set a reasonable gas limit (adjust if necessary)
      gasPrice: gasPrice // Use the specified gas price
    });

    await ticketingContract.deployed();
    
    console.log("Ticketing contract deployed to:", ticketingContract.address);

    // Interact with the deployed contract
    // Get available tickets
    const availableTickets = await ticketingContract.getAvailableTickets();
    console.log("Available Tickets:", availableTickets.toString());

    // Buy tickets (1 ticket as an example)
    const ticketPrice = ethers.utils.parseEther("0.1"); // Assuming ticket price is 0.1 ETH
    const buyTx = await ticketingContract.connect(deployer).buyTickets(1, { value: ticketPrice });
    await buyTx.wait();
    console.log("Bought 1 ticket for 0.1 ETH");

    // Transfer ticket to another address
    const recipient = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0"; // Replace with actual recipient address
    const transferTx = await ticketingContract
      .connect(deployer)
      .transferTicket(recipient, 1); // Ticket ID: 1
    await transferTx.wait();
    console.log(`Transferred ticket #1 to ${recipient}`);

    // Listen to events
    ticketingContract.on("TicketPurchased", (buyer, amount) => {
      console.log(`Event: ${buyer} purchased ${amount.toString()} ticket(s)`);
    });

    ticketingContract.on("TicketTransferred", (from, to, ticketId) => {
      console.log(`Event: Ticket #${ticketId.toString()} transferred from ${from} to ${to}`);
    });
  } catch (error) {
    console.error("Error fetching account balance:", error);
  }

  // Exit process
  process.exit(0);
}

main().catch((error) => {
  console.error("Error in deployment:", error);
  process.exit(1);
});
