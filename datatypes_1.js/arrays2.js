const array = [1,2,[3,4],[6,7],[8,10]]
const newArray = array.flat(Infinity)
console.log(newArray); //*Returns a new array with all sub-array elements 
                       //*concatenated into it recursively up to the specified depth.

let num1 = 25;
let num2 = 43;
let num3 = 32;
console.log(Array.of(num1,num2,num3));//returns a new array with all sub-array elements