//palindrome

// const rd=require('readline');
// const rd1=rd.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// rd1.question('enter the no :',(n)=> {
//     var x=parseInt(n),t=0,sum=0;
//     while(x>0){
//         t=x%10;
//         sum=sum*10+t
//         x=Math.floor(x/10)
//     }
//     if(sum===parseInt(n)){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
//     rd1.close();
// })

//a program which will find all such numbers which are divisible by 7 but are not a multiple of 5, between 2000 and 3200 (both included)
function find() {
    let numbers = [];
    for (let i = 2000; i <= 3200; i++) {
      if (i % 7 === 0 && i % 5 !== 0) {
        numbers.push(i);
      }
    }
    return numbers;
  }
  
  console.log(find());

  //Pascals Triangle
