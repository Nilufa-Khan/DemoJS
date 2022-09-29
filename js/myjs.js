// js output
console.log("Hi World");
document.write("Welcome to js\n");
// window.document.write("Welcome to js");
//alert("hello");
//window.alert("Hello")
// alert is a method belong to window object
//declaring variable
var a = 10; b="hi";c=10.3;d=true;
console.log("value of a = "+a);
console.log("value of b = "+b);
console.log("value of c = "+c);
console.log("value of d = "+d);
// global scope
{
    var ab = 100;
}
//outside block we can access 
console.log(ab);
// local scope
{
    let x = 20;
    console.log(x);
    // once the const variable initialized later on we cant change the value...
    const y = 300;
    console.log(y);
    document.write("\n"+x)
}
//outside block can't access
// console.log(x);
//console.log(y);
let m;
let n = null;
console.log(typeof m);
console.log(typeof n);

// symbol data type
let a1 = Symbol('hello');
let b1 = Symbol('hello');
if(a1==b1){
    console.log("Equal");
}else{
    console.log("Not equal");
}
//back tick character
let v = 20;
let z = 20;
console.log(`value of v = ${v} \nvalue of z = ${z}`);
console.log("value of v = "+v+"\nValue of z = "+z);
//
let val1 = 2;
let val2 ="2";
if(val1 == val2){ // == checks only value ignore the data types
    console.log("equal") //print
}else{
    console.log(" not equal")
}
if(val1 === val2){ // === returns true if the operands are equal and of same type
    console.log("equal")
}else{
    console.log(" not equal") // print 
}