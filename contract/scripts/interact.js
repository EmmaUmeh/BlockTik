const Web3 = require("web3");
require("dotenv").config();

const rpcUrl = process.env.QUICKNODE_URL;
const web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));

// Contract details
const contractABI = [
  // Paste the ABI here from Remix
];
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // Replace with your deployed address

const contract = new web3.eth.Contract(contractABI, contractAddress);

const interact = async () => {
  const accounts = await web3.eth.getAccounts();
  const user = accounts[0];

  // Get available tickets
  const tickets = await contract.methods.getAvailableTickets().call();
  console.log("Available Tickets:", tickets);

  // Buy a ticket
  const ticketCount = 1;
  await contract.methods.buyTickets(ticketCount).send({
    from: user,
    value: web3.utils.toWei("0.1", "ether"),
  });
  console.log(`Purchased ${ticketCount} ticket(s)`);

  // Transfer a ticket
  const recipient = "RECIPIENT_ADDRESS"; // Replace with the recipient's address
  await contract.methods.transferTicket(recipient, 1).send({ from: user });
  console.log("Ticket transferred to:", recipient);
};

interact();
