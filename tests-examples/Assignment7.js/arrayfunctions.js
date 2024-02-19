// Array functions
const numbers = [1, 2, 3, 4, 5];

console.log("forEach:");
numbers.forEach(num => console.log(num));

console.log("\nmap:");
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

console.log("\nfilter:");
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);



