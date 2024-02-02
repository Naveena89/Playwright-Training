//Create a function that calculates the area of a rectangle. It should take length and width as parameters, with width defaulting to 5 if not provided.
function calculateRectangleArea(length, width = 5) {
    return length * width;
}
const length = 8;
const area = calculateRectangleArea(length);
console.log("area of the rectangle:",area);


// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// function moveZerosToEnd(nums) {
//     let nonZeroIndex = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[nonZeroIndex++] = nums[i];
//         }
//     }

//     for (let i = nonZeroIndex; i < nums.length; i++) {
//         nums[i] = 0;
//     }

//     return nums;
// }


// const nums = [0, 1, 0, 3, 12];
// const result = moveZerosToEnd(nums);
// console.log(result); 



//Create a function that takes numbers n1 and n2  as inputs and prints all the prime numbers between n1 and n2.
function primes(n1, n2) {
    for (let i = n1; i <= n2; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

primes(10, 50);