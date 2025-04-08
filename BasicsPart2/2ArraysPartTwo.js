const marvel_heros = ["iron man", "Dr. strange", "loki"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

const heros_list = marvel_heros.concat(dc_heros)
console.log(heros_list)

const all_multiversal_heros = [...marvel_heros, ...dc_heros]

console.log(all_multiversal_heros)