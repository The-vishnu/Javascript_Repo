// const inputTask = document.getElementById('taskInput').value.trim();
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const switchBtn = document.getElementById('themeToggle');
const body = document.body;

switchBtn.addEventListener('change', function () {
    if (switchBtn.checked) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
});


addBtn.addEventListener('click', function () {
    const inputTask = document.getElementById('taskInput').value.trim();
    if (inputTask === '') {
        alert('Add your activitities');
    }

    const list = document.createElement('li');
    list.innerHTML =  `<span>${inputTask}</span>
    <button class="deleteBtn"><i class="fa-solid fa-trash"></button>
    `;

    list.addEventListener('click', function () {
        list.querySelector('span').classList.toggle('completed')
    });

    list.querySelector('.deleteBtn').addEventListener('click', function () {
        taskList.removeChild(list);
    });

    taskList.appendChild(list);
    taskList.value = '';

});
