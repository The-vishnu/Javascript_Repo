const hamBurger = document.querySelector('.hamburger')
const lineClick = document.querySelector('.lines')

const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')

const switchbtn = document.getElementById('switchBtn')
const switchbtn1 = document.getElementById('switchBtn1')
const switchbtn2 = document.getElementById('switchBtn2')
const background = document.querySelector('body')

switchbtn.addEventListener('click', function () {
    switchbtn.classList.toggle('active')
    background.classList.toggle('dark')
})


lineClick.addEventListener('click', function () {
    hamBurger.classList.toggle('show')
    line1.classList.toggle('rotate')
    line2.classList.toggle('rotate')
    line3.classList.toggle('rotate')
    
})