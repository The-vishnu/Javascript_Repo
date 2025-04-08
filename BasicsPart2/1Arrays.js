const myArray = [1, 2, 4, 4, 6, 7]
const myFavorateHeros = ["iron man", "loki", "thor", "Hulk", "Dr. Strange"]
const newArr = myArray.join()


// Arrays Methods 

myArray.push(5)
myArray.pop()
myArray.unshift(8)
myArray.shift()

console.log(myArray)
console.log(newArr)
console.log(typeof(newArr))

// slice , spice 

console.log("A ", myArray)

const myN1 = myArray.slice(1, 3)
console.log("B ", myArray)
console.log(myN1)

const myN2 = myArray.splice(1, 3)
console.log("c ", myArray)
console.log(myN2)






