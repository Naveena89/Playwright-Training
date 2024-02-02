//Reverse String and Array
// function reverseArray(arr) {
//     let reversedArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArr.push(arr[i]);
//     }
//     return reversedArr;
// }

// function reverseString(str) {
//     let reversedStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     }
//     return reversedStr;
// }

// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);
// console.log(reversedArray);

// const originalString = "Javascript Session";
// const reversedString = reverseString(originalString);
// console.log(reversedString);


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


// String functions
const str = "Hi Everyone";

console.log("\nString length:");
console.log(str.length);

console.log("\ncharAt:");
console.log(str.charAt(3));

console.log("\nconcat:");
console.log(str.concat(" This is Naveena"));

console.log("\nincludes:");
console.log(str.includes("Hi"));

console.log("\nsubstring:");
console.log(str.substring(7, 12));

const paddedStr = "   Hello World   ";
console.log("\ntrim:");
console.log(paddedStr.trim());