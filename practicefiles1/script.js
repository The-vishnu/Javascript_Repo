const btn = document.getElementById('triggerBtn')
const card = document.getElementById('cardBox')

btn.addEventListener('click', function () {
    card.classList.add('animate')
})