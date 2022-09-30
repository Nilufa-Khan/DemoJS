const student ={
    "firstName":"Nilufa",
    "lastName": "Khan",
    "roll":12
}
console.log(student);
console.log(student.toString());
//prototype is nothing but defining the structure of objects
//declaration of method prototype
// whenever we create an object in js, object is an
// in javascript predefined object present
// object has lot of prebuild  property and methods given
console.log("Student name = ", student.firstName);
console.log("Roll = ", student.roll);
console.log(`${student.lastName}`);

function displayDetails(){
    console.log(`${student.lastName},${student.firstName}`); 
}
displayDetails();
//Arrays
// its isocollection of data which is similar type. and store
// in contigous allocation memory..
//declare array
// we just declare variable and assign values inside square bracket
let roll = [100,102,1004];
console.log("Array : ",roll);
console.log(roll.length);

let example = [12,"hi",{id:1,"name":"Zaid"},1.45,"M",[10,23]];
console.log("Array : ",example);
console.log("3rd index : ",example[2])
console.log("3rd index : ",example[2].id)
console.log("3rd index : ",example[2].name)
console.log("5th index : ",example[5])
console.log(example.length);
//print value
for(let i = 0; i < roll.length; i++){
    console.log(roll[i]);
}
// print index
for(let val in roll){
    console.log(val)
}
//print value
for(let val in roll){
    console.log(roll[val])
}

let fruits = ["Apple", "Mango","Banana"];
let fruitString = "";
for(let val of fruits){
   fruitString += val+"  ";
}
console.log(fruitString)
//dynamically we can add the data, delete the data ==> operations
//array method
// in js arrays are not primitive its an object
// we can resize array in js
//we can store multiple data types value
// let example = [12,"hi",{id:std,details:"xx"},1.45,"M",[10,23]];
// indexing start with 0
// length property present in js,, it will count no of elements in the array and it gives total size
// exampl.length; // 6