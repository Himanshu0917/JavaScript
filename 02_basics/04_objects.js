// const tinderUser = new Object() singelton object
const tinderUser = {} //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        firstname : "himanshu",
        lastname : "singh"
    }
}

console.log(regularUser.fullname.firstname)

//console.log(regularUser.fullname?.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3 = {...obj1,...obj2}
console.log(obj3)

/*
Generally the data we get from api's is in 
the form of array of objects
const users = [
    {
        id:1,
        email: "somae@gmail.com"
    },
    {
    }
]
*/
const users = [
    {
        id:1,
        email: "somae@gmail.com"
    },
    {
    }
]
// to access element from them

users[1].email
console.log(tinderUser);

// to get the keys of an object in array format
console.log(Object.keys(tinderUser));

// to get values of an object 
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'))

// Destructuring 

const course = {
    coursename: "JavaScript",
    Price: "1000",
    courseInstructor: "Himanshu"
}
//destructuring
const {courseInstructor: instructor} = course

console.log(instructor)



