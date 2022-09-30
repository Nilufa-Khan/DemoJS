// insertion  .push(),unshift()
//removal      .pop(), shift()

let colors = ["red", "black","white"]
console.log("Initially elements in array are :\n" + colors+" ")

console.log("====push====")
console.log(colors.push("maroon","babypink"));
console.log(colors)

//push element at last index

console.log("====push====")
colors.push("yellow");
console.log(colors)

// unshift add elemet at 0th index

console.log("====unshift====")
colors.unshift("pink","orange")
console.log(colors)

//pop remove the last index element
console.log("====pop====")
console.log(colors.pop())
console.log(colors)

//shift remove 0th index element
console.log("====shift====")
console.log(colors.shift())
console.log(colors)

//slice
console.log("====slice====")
let number = [11,23,45,67,43,21,22,33,44]
console.log(number)

let ss = number.slice(2,5) // 45,67,43
console.log(ss)

console.log("==============")
console.log(number)
//search an element
console.log("=======Search element=======")

console.log(number.indexOf(33))
console.log(number.lastIndexOf(43,7))
console.log("=======Sort=======")
console.log(number.sort())
console.log("=======Reverse=======")
console.log(number.reverse())
console.log("=======Reverse Sort=======")
console.log(number.reverse().sort())    
let studentName = ["Supriya","Subholeena","Shaheen","Chandni","Mausham"]

studentName.splice(-1,4,"meghali","monali") // ['Supriya', 'Subholeena', 'Shaheen', 'Chandni', 'meghali', 'monali']
console.log(studentName)
studentName.slice(-2,4)
console.log("=====================")
console.log(studentName)
let x = [...colors,...number,...studentName]
console.log(x)
let[m1,m2,...m3] = studentName;
console.log("m1 : "+m1)
console.log("m2 : "+m2)
console.log("m3 : "+m3)