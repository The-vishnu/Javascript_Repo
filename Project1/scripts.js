const redBar = document.getElementById('red')
const greenBar = document.getElementById('green')
const blueBar = document.getElementById('blue')

const redValue = document.getElementById('redVal') 
const greenValue = document.getElementById('greenVal')
const blueValue = document.getElementById('blueVal') 

const body = document.querySelector('body')

const feeling = document.getElementById('moodText')
const button = document.querySelectorAll('.buttons button')


button.forEach(function (btn) {
    btn.addEventListener('click', function() {
        feeling.textContent =  `I'm feeling ${btn.textContent}`
    })
})

redBar.addEventListener('input', function () {
    redValue.textContent = redBar.value
    updateColor()

    // console.log(redBar.value)
})

greenBar.addEventListener('input', function () {
    greenValue.textContent = greenBar.value
    updateColor()

    // console.log(redBar.value)
})

blueBar.addEventListener('input', function () {
    blueValue.textContent = blueBar.value
    updateColor()

    // console.log(redBar.value)
})

function updateColor() {
    const red = redBar.value
    const green = greenBar.value
    const blue = blueBar.value
    body.style.backgroundColor = `rgb(${red},${green}, ${blue})`
}

