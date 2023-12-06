//  Syntax of a function
//  function function_name(){}

function myName(){
    console.log(`My name is Himanshu Singh`)
}
myName // will not do anything
myName() // to execute
 
function addTwo(num1,num2){
    console.log(num1+num2);
}

addTwo(3,4);

const ans = addTwo(3,4);
console.log("Answer: ",ans); // doesn,t print the value 

function addTwoNum(number1,number2){
    let result = number1+number2;
    console.log(number1+number2);
    return result;
}

const result = addTwoNum(2,3);
console.log("Result =",result);

function loginUser(username){
    return `${username} just logged in`
}

console.log(loginUser("Himanshu"))

// REST OPERATOR

function calculateCarPrice(val1,val2,...num1)
{
    return num1;
}

console.log(100,200)

//  Pass Objects to a function

const user ={
    username: "himanshu",
    price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user);

//  pass arrays to a function

const myNewArray = [200,300,400,500]

function returnSecond(getArray)
{
    return getArray[1];
}

console.log(returnSecond(myNewArray));