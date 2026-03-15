// Permission rules
const rules = [
  { role: "admin", action: "READ", allowed: true },
  { role: "student", action: "READ", allowed: true },
];

// 1. 
const allowedRules = rules.filter(rule => rule.allowed === true);

// 2.
const allowedPairs = allowedRules.map(rule => `${rule.role}:${rule.action}`);

// 3. 
const summary = allowedRules.reduce


// 4. 
console.log("allowedRules:", allowedRules);
console.log("allowedPairs:", allowedPairs);
console.log("summary:", summary);