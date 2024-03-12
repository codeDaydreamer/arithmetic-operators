/*arithmetic operators
+ addition          ** power
- subtraction       % modulus
/ division
* multiplication        
 javascript has operator precedence
*/

let currentPopulation = 30;
let name = `daydreammer`;
let InTransfers = 20;
let OutTransfers = 10;
let newPopulation = currentPopulation + InTransfers - OutTransfers;

let platesToBuy = newPopulation * 3;

console.log(`The student population is ${currentPopulation}`);
console.log(`The new population of students is ${newPopulation}`);
console.log(`The number of plates to buy is ${platesToBuy} since each one gets 3`);