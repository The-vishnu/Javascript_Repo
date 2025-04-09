function sayMyName (){
    console.log("server start...")
}

// sayMyName()

function addTwoNum(num1, num2){
    console.log(num1 + num2)
}

function subTwoNum(num1, num2){
    return num1 - num2

}
const result = subTwoNum(3, 5)

console.log(`the sub of two number is ${result}`)




function loginUserMessage(userName){
    if(!userName){
        console.log("plz kindly enter your name")
        return
    }
    return `${userName} just logged in `
}
console.log(loginUserMessage("Vishnu"))
console.log(loginUserMessage())





function pricesOfItems (val1, val2, ...num1) {
    return num1
}


console.log(pricesOfItems(12, 24, 34, 34,44))



const user = {
    username: "Jhon",
    age: 45
}

function handleObj(anyObj){
    console.log(`username is ${anyObj.username} and age is ${anyObj.age}`)
}

handleObj(user)
handleObj({
    username: "Smith",
    age: 34
})


const myNewArr = [12, 4, 34, 34]

function returnValue(getArray){
    return getArray[1]
}

console.log(returnValue(myNewArr))