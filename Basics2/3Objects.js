// singleton 
// objects literals 

const jsUser = {
    name: "Tony Stark",
    age: 48,
    location: "New York",
    email: "starkinderstries@gmail.com",
    isLoggined: false,
    lastLOggined: ["Monday", "Saterday"]
}

jsUser.greeting = function(){
    console.log(`hello ${jsUser.name} you are now Avanger`)
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser)
console.log(jsUser.greeting())
