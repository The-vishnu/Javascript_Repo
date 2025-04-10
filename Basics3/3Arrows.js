const user = {
    username:  "Jhon",
    age: 34,

    welcomeMessage: function(){
        console.log(`hey ${this.username}, welcome to our platform`)
        console.log(this)
    }


}


user.welcomeMessage()
user.username = "Elon"
user.welcomeMessage()
console.log(this)


const something = () => {
    let username = "reva"
    console.log(this)
}




something()
// function something(){
//     let username = "reva"
//     console.log(this.username)
// }

// something()