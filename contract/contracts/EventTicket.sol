// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventTicket {
    address public owner;
    uint public totalTickets;
    uint public ticketsSold;
    
    mapping(address => uint) public tickets;
    
    // Event to track ticket purchase
    event TicketPurchased(address buyer, uint ticketCount);

    // Event to track ticket transfer
    event TicketTransferred(address from, address to, uint ticketCount);

    constructor(uint _totalTickets) {
        owner = msg.sender;
        totalTickets = _totalTickets;
        ticketsSold = 0;
    }

    // Function to buy tickets
    function buyTickets(uint _ticketCount) public payable {
        require(_ticketCount > 0, "Ticket count must be greater than 0");
        require(ticketsSold + _ticketCount <= totalTickets, "Not enough tickets available");
        require(msg.value == _ticketCount * 0.1 ether, "Incorrect value sent");

        tickets[msg.sender] += _ticketCount;
        ticketsSold += _ticketCount;
        emit TicketPurchased(msg.sender, _ticketCount);
    }

    // Function to transfer tickets to another user
    function transferTicket(address _to, uint _ticketCount) public {
        require(tickets[msg.sender] >= _ticketCount, "Insufficient tickets to transfer");
        
        tickets[msg.sender] -= _ticketCount;
        tickets[_to] += _ticketCount;
        
        emit TicketTransferred(msg.sender, _to, _ticketCount);
    }

    // Function to check remaining tickets
    function getAvailableTickets() public view returns (uint) {
        return totalTickets - ticketsSold;
    }
}
