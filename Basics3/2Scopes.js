// these are globle variable accesible anywhere of program
let a = 12
const b = 23
var c = 30

// these are the local variavles and this is local scope accesible with in scope only 
if(true){
    let a = 134
    const b = 23
    var c = 34
}
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "smithi"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    // two()
}

one()