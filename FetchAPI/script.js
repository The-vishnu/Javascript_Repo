
const url = "https://api.github.com/users/The-vishnu";

// let promice = fetch(url)
// console.log(promice)

const getinfo = async function () {
    console.log("fetching data...");
    let responce = await fetch(url);
    console.log(responce);

    let data = await responce.json();

    console.log(data)
}

getinfo();
