// for of 
const arr = [1, 5, 8, 6, 5, 5]

for(const num of arr){
    // console.log(num)
}

const greeting = "Hello message"

for(const greet of greeting){
    // console.log(`each charector is ${greet}`)
}

const map = new Map()
map.set(`IN`, `India`)
map.set(`US`, `America`)
map.set(`Eur`, `Europe`)


for(const [key, value] of map){
    // console.log(`${key}:- ${value}`)
}
// console.log(map)



const stranthOfAvangers = {
    knowladge: "Iron Man",
    time: "Loki",
    nodies: "deadpool"
}

for(const key in stranthOfAvangers){
    console.log(`${stranthOfAvangers[key]} has power of ${key}`)
}