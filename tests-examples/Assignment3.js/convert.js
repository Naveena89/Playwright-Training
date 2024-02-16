const obj = {};
const notANumber = NaN;
const func = function(){};
const arr = ["twenty"];
Obj = Number(obj);
NaN = Boolean(notANumber);
Func = Boolean(func);
Ar = Number(arr[0]);

console.log("Object:", Obj);
console.log("Infinity:", Infinity);
console.log("NaN:", NaN);
console.log("Function:", Func);
console.log("Array Element:", Ar);