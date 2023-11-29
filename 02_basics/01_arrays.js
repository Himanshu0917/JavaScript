// Array
const myArray = [1,2,3,4,5]
const myArr2 = new Array(6,7,8,9)
console.log(myArr2[0])
// Array Methods
// console.log(myArr2.length())
myArray.push(6)
console.log(myArray)
myArray.pop()
console.log(myArray)

console.log(myArray.includes(9))
console.log(myArray.indexOf(9))

// slice, splice 

console.log("A ", myArray)
const myn1 =myArray.slice(1,3)
console.log(myn1)
console.log("B ",myArray)

const myn2 = myArray.splice(1,3)
console.log(myn2)

console.log("C ",myArray)

