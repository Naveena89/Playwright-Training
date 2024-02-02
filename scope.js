"use strict"
// functional scope
// function f(){
//     let a=20;
//     console.log(a);
// }
// f();
// // console.log(a);


// global and block variable
// let a=10;
// {
//     let b=30;
//     console.log(b);
// }
// console.log(a);
// // console.log(b);

// let a=10;
// {
//     var b=30;
    
// }
// console.log(a);
// console.log(b);

let a=10;
{
    var b=30;
    z="ten";
}

function f(){
    var c=30;
    n="naveena";
}
console.log(a);
console.log(b);
// console.log(c);
console.log(z);
// console.log(n);
