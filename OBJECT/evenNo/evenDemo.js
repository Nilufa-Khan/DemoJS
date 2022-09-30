let num = [10,23,45,67,89,9,12];
let sumOfEven = 0;
let sumOfOdd = 0;
for(let val of num){
    if(val % 2 == 0){
        sumOfEven = sumOfEven + val;
    }else{
        sumOfOdd = sumOfOdd + val
    }
}
console.log("Sum of even = "+ sumOfEven)
console.log("Sum of odd = "+ sumOfOdd)