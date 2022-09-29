let num = 2;
let res = 0;
for(let i = 1; i <= 10;i ++){
   console.log(num*i); 
}
// method
function test(a,b){
    return (a+b);
}
let c = test(10,20);
console.log("addition = "+ c);
function greet(){
    console.log("Amore");
}
// call the function
greet();
// functions 2 types pre defined/ built in
// and user defined
//isNan() method
console.log(isNaN(3)); // false
console.log(isNaN("Hello")); // true