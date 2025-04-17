const startBtn = document.querySelector('.start-button');
const stopBtn = document.querySelector('.stop-button');
let stopChange

const randomColor = function() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

function changeBG() {
    document.body.style.backgroundColor = randomColor();
}

startBtn.addEventListener('click', function () {
    startBtn.classList.remove('active');
    void startBtn.offsetWidth;
    startBtn.classList.add('active');
    
    stopChange = setInterval(changeBG, 1000);

    document.querySelector('.text').textContent = 'Updated!';
    // const color = randomColor
    // console.log(color)

});

stopBtn.addEventListener('click', function () {
    stopBtn.classList.remove('active');
    void stopBtn.offsetWidth;
    stopBtn.classList.add('active');
    clearInterval(stopChange)
})

