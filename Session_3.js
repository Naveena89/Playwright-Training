//Convert   { }, -Infinity, NaN, function(){} and  ["twenty"] into Number,String and Boolean DataTypes

// const obj = {};
// const notANumber = NaN;
// const func = function(){};
// const arr = ["twenty"];
// Obj = Number(obj);
// NaN = Boolean(notANumber);
// Func = Boolean(func);
// Arr = Number(arr[0]);

// console.log("Object:", Obj);
// console.log("Infinity:", Infinity);
// console.log("NaN:", NaN);
// console.log("Function:", Func);
// console.log("Array Element:", Arr);


//Differentiate between toString() and String() functions.

// let number = 42;
// let stringFromNumber = number.toString();
// console.log(stringFromNumber); 
// let array = [1, 2, 3];
// let stringFromArray = array.toString();
// console.log(stringFromArray); 

// let booleanValue = true;
// let stringFromBoolean = String(booleanValue);
// console.log(stringFromBoolean); 
// let date = new Date();
// let stringFromDate = String(date);
// console.log(stringFromDate); 

//Write programs to concatenate Numbers,Strings and booleans with different combinations
let num1 = 10;
let num2 = 20;
let result = num1 + num2;
console.log(result)

let str1 = "Hello";
let str2 = " World";
let result1 = str1 + str2;
console.log(result1);

let num = 30;
let str = " days";
let result2 = num + str;
console.log(result2);

let bool1 = true;
let bool2 = false;
let result3 = bool1 + bool2;
console.log(result3);