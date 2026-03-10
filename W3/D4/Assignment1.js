// 1. Initial queue with at least 5 tickets
let tickets = [
  { id: "T101", priority: "HIGH", resolved: false },
  { id: "T102", priority: "LOW", resolved: false },
    { id: "T103", priority: "LOW", resolved: false },
  { id: "T104", priority: "HIGH", resolved: false },
  { id: "T105", priority: "MEDIUM", resolved: true }

];

// 2.
tickets.unshift({ id: "T101", priority: "HIGH", resolved: false });

// 3.  
tickets.push(
  { id: "T106", priority: "LOW", resolved: false },
);

// 4. 
let currentTicket = tickets.shift();

// 5.
let droppedTicket = tickets.pop();

// 6. 
let pending = tickets.filter(ticket => ticket.resolved === false);

// 7.
let pendingIds = pending.map(ticket => ticket.id);

// 8. 
console.log("Current Ticket:", currentTicket);
console.log("Dropped Ticket:", droppedTicket);
console.log("Pending Tickets:", pending);
console.log("Pending Ticket IDs:", pendingIds);