const Name = document.getElementById('name')
const imgSrc = document.getElementById('avatar');
const bio = document.getElementById('bio');
const followers = document.getElementById('followers');
const repos = document.getElementById('repos');

// let promice = fetch(url)
// console.log(promice)



const updateUI = function(data) {

    imgSrc.src = data.avatar_url;
    Name.textContent = data.name;
    followers.textContent = `Followers: ${data.followers}`;
    repos.textContent = `repos: ${data.public_repos}`;

    if(data.bio == null){
        bio.textContent = "No Bio Available!";
    }else{
        bio.textContent = data.bio;
    }
    document.getElementById('profile-card').style.display = 'block';
    
}


const getinfo = async function () {
    const userName = document.getElementById('username').value.trim();

    if (!userName) {
        alert("Please enter a GitHub username!");
        return;
    }
    const url = `https://api.github.com/users/${userName}`;

    try {
        const responce = await fetch(url);
        if(!responce.ok){
            throw new Error("User not found!");
        }
        const data = await responce.json();
        updateUI(data);
        // console.log(data);
    } catch (error) {
        alert("Failed to fetch data!");
        profileCard.style.display = 'none';
        
    }
    // const data = await responce.json();

    // updateUI(data);
}

document.querySelector('button').addEventListener('click', getinfo);

