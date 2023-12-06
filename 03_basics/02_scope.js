// Global Scope
let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);


// Block Scope
if(true){
    let e = 10
    const f = 20
    var g = 30
}

// console.log(e); give error
// console.log(f); give error 
console.log(g);  // will print even outside the function

function one(){
    const username = "himanshu"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);
    two()

}

one()

if(true){
    const username  = "himanshu"
    if(username === "himanshu"){
        const website = " Youtube"
        console.log(username + website )
    }
    // console.log(website); will give error
}

// console.log(username); will give error

// +++++++++++  Interesting concept  ++++++

// This works fine due to hoisting
addOne(5)
function addOne(num){
    return num +1
}


// Hoisting doesn't work here
addTwo(5)
const addTwo  = function(num){
 return num +2
}
