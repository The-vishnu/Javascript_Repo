const tinderUser = new Object()
// const tinder2 = {}

tinderUser.id = "123bac"
tinderUser.name = "Samay"
tinderUser.isLoggedin = false 

const regularUser = {
    email: "somating@gmail.com",
    fullName: {
        userfullName: {
            firstname: "Vishnu",
            lastName: "Dompale"
        }
    }

}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1 , obj2 )
console.log(obj3);

// console.log(Object.keys(tinderUser))
console.log(Object.values(regularUser))
// console.log(regularUser.fullName.userfullName.firstname)
// console.log(tinder2)