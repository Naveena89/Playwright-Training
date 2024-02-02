// function add(){
//     // console.log("this is function");
//     return 1 +2;
// }

// console.log(add());

// function fun(a, b=1){
//     console.log(a, b);
// }
// fun(3,5);

// ...args
// anonymous functions
// arrow functions

// var a= test => test +1;
// console.log(a(10));

// var a= () => {
//     return "hello world";
// }
// console.log(a());

//async funct
function asyncfun(){
    console.log("start");
    
    setTimeout(() => {
        console.log("middle(inside setTimeout)");
    },10000);
    
    console.log("end");
}

asyncfun();