const taskInput = document.getElementById('task__input');
const taskAddButton = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && taskInput.value.trim() !== '') {
    event.preventDefault();
    addNewTask();
    taskInput.value = '';
  }
})

taskAddButton.addEventListener('click', (event) => {
  if (taskInput.value.trim()) {
    event.preventDefault();
    addNewTask();
    taskInput.value = '';
  }
})

taskList.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (event.target.classList.contains('task__remove')) {
    event.target.closest('.task').remove();
  }
})

function addNewTask() {
  let newTask = `<div class="task">
              <div class="task__title">
                ${taskInput.value}
              </div>
              <a href="#" class="task__remove">&times;</a>
            </div>`;
  
  taskList.insertAdjacentHTML('beforeend', newTask);
}