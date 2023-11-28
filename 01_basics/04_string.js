const name = "Himanshu"
const repoCount = 5
console.log(name + repoCount+" Value")

//String interploation
// better way of writing the above code
console.log(`Hello my name is ${name} and currently my repo count is ${repoCount}`)

// two ways of declaring a string 

const string1 = "string"
const string2 = new String('string2')
console.log(string1)
console.log(string2)

// few string methods
const newString = string1.substring(0,1)
console.log(newString)
const newstring2 = string2.slice(-8,4)
console.log(newstring2)