const a=require('readline');
const a1=a.createInterface({
    input:process.stdin,
    output:process.stdout
})
a1.question('enter the no :',(n)=> {
    var x=parseInt(n),t=0,sum=0;
    while(x>0){
        t=x%10;
        sum=sum*10+t
        x=Math.floor(x/10)
    }
    if(sum===parseInt(n)){
        console.log(true);
    }
    else{
        console.log(false);
    }
    a1.close();
})