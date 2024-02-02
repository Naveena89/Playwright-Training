// class counter{
//     static adder;
//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     }
//     add(){
//         return this.a +this.b +counter.adder;
//     }
// }
// counter.adder= 50;
// let obj = new counter(1,2);
// console.log(obj.add());
// let obj1 = new counter(2,3);
// console.log(obj1.add());

// counter.adder= 100;
// console.log(obj.add(1,2));
// console.log(obj.add(3,5));


class counter{
    static adder;
    constructor(){
        this.a=a;
        this.b=b;
    }
    add(){
        return counter.adder;
    }
}
counter.adder= 100;
console.log(counter.add());

