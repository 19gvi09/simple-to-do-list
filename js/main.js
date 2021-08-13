// New Task section start //

let newTaskInput = document.querySelector('#taskInputAdd');
let buttonAdd = document.querySelector('#buttonAdd');
let activeTaskList = document.querySelector('#activeTaskList');
let completedTaskList = document.querySelector('#completedTaskList');

// Creating new task element
function createItem() {
    // New task item
    newItem = document.createElement('li');
    newItem.classList.add('task');

    // Div for text
    let div = document.createElement('div');

    // Checkbox
    checkbox = document.createElement('i');
    checkbox.classList.add('far', 'fa-square', 'task__checkbox');

    // Task text
    let taskText = document.createElement('p');
    taskText.classList.add('task__text');
    taskText.innerText = newTaskInput.value;

    // Task text editor
    let taskTextEditor = document.createElement('input');
    taskTextEditor.classList.add('task__input', 'hidden');
    taskTextEditor.value = newTaskInput.value;
    taskTextEditor.setAttribute('type', 'text');
    taskTextEditor.id = 'taskTextEdit';

    // Packing div
    
    div.appendChild(taskText);
    div.appendChild(taskTextEditor);

    // Div for task buttons
    let divButtons = document.createElement('div');
    divButtons.classList.add('task__buttons');

    // Edit button
    buttonEdit = document.createElement('button');
    buttonEdit.classList.add('task__button');
    buttonEdit.id = 'buttonEdit';
    buttonEdit.innerText = 'Edit';

    // Delete button
    buttonDelete = document.createElement('button');
    buttonDelete.classList.add('task__button');
    buttonDelete.id = 'buttonDelete';
    buttonDelete.innerText = 'Delete';

    // Packing div for task buttons
    divButtons.appendChild(buttonEdit);
    divButtons.appendChild(buttonDelete);

    // Packing task item
    newItem.appendChild(checkbox);
    newItem.appendChild(div);
    newItem.appendChild(divButtons);
}

// Adding new task element to DOM
function addItem() {
    if (newTaskInput.value === '') {
        alert('No input')
    }
    else {
        createItem();
        activeTaskList.prepend(newItem);
        newTaskInput.value = '';
    }
    buttonDelete.addEventListener('click', deleteTask);
    buttonEdit.addEventListener('click', editTask);
    checkbox.addEventListener('click', checkTask);
}

buttonAdd.addEventListener('click', addItem);

// 'Delete' button
function deleteTask() {
    this.parentElement.parentElement.remove();
}

// 'Edit' button
function editTask() {
    let taskEdit = this.parentElement.previousSibling.querySelector('input[type=text]');
    let taskText = taskEdit.previousSibling;
    if (taskEdit.classList.contains('hidden')) {
        taskText.classList.add('hidden');
        taskEdit.classList.remove('hidden');
    }
    else {
        taskText.innerText = taskEdit.value;
        taskEdit.classList.add('hidden');
        taskText.classList.remove('hidden');
    }
}

// Task checkbox
function checkTask() {
    if (this.classList.contains('fa-square')) {
        this.classList.remove('fa-square');
        this.classList.add('fa-check-square');
        this.nextSibling.firstChild.classList.add('completed');
        completedTaskList.append(this.parentElement);
    }
    else {
        this.classList.remove('fa-check-square');
        this.classList.add('fa-square');
        this.nextSibling.firstChild.classList.remove('completed');
        activeTaskList.prepend(this.parentElement);
    }
    
}
// New task section end //

// Controls start //

let buttonAll = document.querySelector('#buttonAll');
let buttonActive = document.querySelector('#buttonActive');
let buttonCompleted = document.querySelector('#buttonCompleted');
let buttonClearCompleted = document.querySelector('#buttonClearCompleted');
let buttonClearAll = document.querySelector('#buttonClearAll');
let activeTasks = document.querySelector('#activeTasks');
let completedTasks = document.querySelector('#completedTasks');

// 'All' button
function showAllTasks() {
    if (activeTasks.classList.contains('hidden')) {
        activeTasks.classList.remove('hidden');
    };
    if (completedTasks.classList.contains('hidden')) {
        completedTasks.classList.remove('hidden');
    }
}

buttonAll.addEventListener('click', showAllTasks);

// 'Active' button
function showActiveTasks() {
    if (activeTasks.classList.contains('hidden')) {
        activeTasks.classList.remove('hidden');
    };
    if (! completedTasks.classList.contains('hidden')) {
        completedTasks.classList.add('hidden');
    }
}

buttonActive.addEventListener('click', showActiveTasks);

// 'Completed' button
function showCompletedTasks() {
    if (! activeTasks.classList.contains('hidden')) {
        activeTasks.classList.add('hidden');
    };
    if (completedTasks.classList.contains('hidden')) {
        completedTasks.classList.remove('hidden');
    }
}

buttonCompleted.addEventListener('click', showCompletedTasks);

// 'Clear completed' button
function clearCompletedTasks() {
    let e = completedTasks.querySelectorAll('li');
    e.forEach(element => {
        element.remove();
    });;
}

buttonClearCompleted.addEventListener('click', clearCompletedTasks);

// 'Clear all' button
function clearAllTasks() {
    let tasks = document.querySelector('#tasks')
    let e = tasks.querySelectorAll('li');
    e.forEach(element => {
        element.remove();
    });;
}

buttonClearAll.addEventListener('click', clearAllTasks);
// Controls end //