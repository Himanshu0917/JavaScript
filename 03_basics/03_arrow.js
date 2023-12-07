const user = {
    username: "Himanshu",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }

}

user.welcomeMessage()

user.username = "Sam"

user.welcomeMessage()

console.log(this)


function chai(){
    let userName  = "Himanshu"

    console.log(this.userName);
}
chai()

const fun = function(){
    let myName = "Himanshu"
    console.log(this.myName);

}
fun()


// +++++++++++++ ARROW FUNCTION +++++++++++

const chai2 = () =>{
    let name = "Himanshu"
    console.log(this.name);
}
chai2()

const addTwo = (num1,num2) =>{
    return num1+num2
}
console.log(addTwo(5,6))


//  IMPLICIT RETURN 
const addtwo = (num1,num2) => num1+num2
console.log(addtwo(7,8))