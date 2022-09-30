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


