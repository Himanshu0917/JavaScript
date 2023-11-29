// Singleton -> constructor se banega to singleton
// we use -> object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Himanshu",
    "full name" : "Himanshu Singh",
    [mySym]: "mykey1",
    age: 19,
    location: "bangalore",
    email: "himanshu@googl.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// ways to access
console.log(JsUser.email)
console.log(JsUser["email"]) // must use ""
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "himanshu@chatgpt"
// Object.freeze(JsUser)
JsUser.email = "himanshumicro.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
