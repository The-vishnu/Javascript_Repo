const switchbtn = document.getElementById('switchBtn')
const switchbtn1 = document.getElementById('switchBtn1')
const switchbtn2 = document.getElementById('switchBtn2')
const background = document.querySelector('body')

switchbtn.addEventListener('click', function () {
    switchbtn.classList.toggle('active')
    background.classList.toggle('dark')
})
