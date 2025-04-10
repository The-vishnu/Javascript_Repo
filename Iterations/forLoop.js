// for(let i = 0; i <= 10; i++){
//     console.log(i+1)
// }


// const array = [1, 2, 3, 4, 5, 6]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element %2 == 0) {
//         console.log(element)   
//     }
// }

// for(let i = 1; i <= 10; i++){
//     console.log(`${i} ka table: \n`)
//     for(let j = 1; j <= 10; j++){
//         console.log(j*i)
//     }
// }


for (let index = 0; index <= 20 ; index++) {
    if(index == 5){
        console.log(`detected ${index}, is an imposter`)
        break;
    }
    console.log(`value of i is ${index}`)
}


for (let index = 0; index <= 20 ; index++) {
    if(index == 5){
        console.log(`detected ${index}, is an imposter, let him go for once`)
        continue;
    }
    console.log(`value of i is ${index}`)
}



