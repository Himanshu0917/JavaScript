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