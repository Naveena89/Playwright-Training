// if (null == undefined){
//     console.log("true");
// }else{
//     console.log("false");
// }

//Loops
//FOR
// arr= [1,2,3,4,5];

// for(let i=1; i<=arr.length; i++){
//      console.log(arr[i]);
// }

//FOR IN
// const dict = {
//     1:"one",
//     2:"tw0",
// };

// for (i in dict){
//     console.log(i,dict[i]);
// }

// //FOR IN
// const n= "Naveena Roshika";
// for(i in n){
//     console.log(i, n[i]);
// }

// var s="hello";
// var s="world";
// var s=" ";
// for(i in s){
//     console.log(i, s[i]);
// }

// //FOR OF
// var s="hello";
// for(i of s){
//     console.log(i);
// }

//While Loop
// array =[1,2,3,4];
// let i=1;
// while(i<array.length) {
//     console.log(array[i]);
//     i += 1;
// }

//Do While Loop
// array =[1,2,3,4];
// let i=0;
// do{
//     console.log(i);
//     i += 1;
// }
// while(i<array.length); 

// Switch 
// let i =3;
// switch(i){
//     case 1: console.log('One');
  
//     case 2: console.log('two');
//     break;
//     default: console.log('NAN');
//     break;
//     case 3: console.log('three');
// }

//IF ELSE 
// let n=20;
// let m=10;
// let p=20;
// if(n<=m){
//     console.log("true");
// }else{
//     console.log("false");
// }

//ELSE IF Ladder
// if(n>m){
//     console.log("n is bigger");
// }else if(n>p){
//     console.log("p is smaller");
// }else{
//     console.log("m is bigger");
// }
    
//Nested IF
// if(n>m){
//     if(n>p){
//         console.log("n is bigger");
//     }else{
//         console.log("n is smaller");
//     }
// }else {
//     console.log("n is smaller");
// }

//jumping statements

//BREAK
// arr = [1,2,3,4,5];

// for(let i=0; i< arr.length; i++){
//     if(arr[i] === 3){
//         console.log("Emelment found",arr[i]);
//         break;
//     }
//     console.log("current element",arr[i]);
// }

//Continue
ar = [1,2,3,4,5];

for(let i=0; i< ar.length; i++){
    if(ar[i] === 3){
        break;
    }
    console.log("current element",ar[i]);
}