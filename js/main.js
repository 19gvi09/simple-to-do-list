// New Task section start //

let newTaskInput = $('#taskInputAdd');
let buttonAdd = $('#buttonAdd');
let activeTaskList = $('#activeTaskList');
let completedTaskList = $('#completedTaskList');

// Creating new task element
function createItem() {
    // New task item
    newItem = $('<li>', {'class': 'task'});

    // Div for text
    let div = $('<div>');

    // Checkbox
    checkbox = $('<i>', {'class': 'far fa-square task__checkbox'});

    // Task text
    let taskText = $('<p>', {'class': 'task__text', text: newTaskInput.val()});

    // Task text editor
    let taskTextEditor = $('<textarea>', {'class': 'task__input hidden', rows: '1', id: 'taskTextEdit'}).val(newTaskInput.val());

    // Packing div
    div.append(taskText);
    div.append(taskTextEditor);

    // Div for task buttons
    let divButtons = $('<div>', {'class': 'task__buttons'});

    // Edit button
    buttonEdit = $('<button>', {'class': 'task__button', id: 'buttonEdit', text: 'Edit'});

    // Delete button
    buttonDelete = $('<button>', {'class': 'task__button', id: 'buttonDelete', text: 'Delete'});

    // Packing div for task buttons
    divButtons.append(buttonEdit);
    divButtons.append(buttonDelete);

    // Packing task item
    newItem.append(checkbox);
    newItem.append(div);
    newItem.append(divButtons);
}

// Adding new task element to DOM
function addItem() {
    if (newTaskInput.val() === '') {
        alert('No input')
    }
    else {
        createItem();
        activeTaskList.prepend(newItem);
        newTaskInput.val('');
    }
    buttonDelete.click(deleteTask);
    buttonEdit.click(editTask);
    checkbox.click(checkTask);
}

buttonAdd.click(addItem);

// 'Delete' button
function deleteTask() {
    this.parentElement.parentElement.remove();
}

// 'Edit' button
function editTask() {
    let taskEdit = this.parentElement.previousSibling.querySelector('textarea');
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

let buttonAll = $('#buttonAll');
let buttonActive = $('#buttonActive');
let buttonCompleted = $('#buttonCompleted');
let buttonClearCompleted = $('#buttonClearCompleted');
let buttonClearAll = $('#buttonClearAll');
let activeTasks = $('#activeTasks');
let completedTasks = $('#completedTasks');

// 'All' button
function showAllTasks() {
    if (activeTasks.hasClass('hidden')) {
        activeTasks.removeClass('hidden');
    };
    if (completedTasks.hasClass('hidden')) {
        completedTasks.removeClass('hidden');
    }
}

buttonAll.click(showAllTasks);

// 'Active' button
function showActiveTasks() {
    if (activeTasks.hasClass('hidden')) {
        activeTasks.removeClass('hidden');
    };
    if (! completedTasks.hasClass('hidden')) {
        completedTasks.addClass('hidden');
    }
}

buttonActive.click(showActiveTasks);

// 'Completed' button
function showCompletedTasks() {
    if (! activeTasks.hasClass('hidden')) {
        activeTasks.addClass('hidden');
    };
    if (completedTasks.hasClass('hidden')) {
        completedTasks.removeClass('hidden');
    }
}

buttonCompleted.click(showCompletedTasks);

// 'Clear completed' button
function clearCompletedTasks() {
    completedTasks.find('li').remove();
}

buttonClearCompleted.click(clearCompletedTasks);

// 'Clear all' button
function clearAllTasks() {
    completedTasks.find('li').remove();
    activeTasks.find('li').remove();
}

buttonClearAll.click(clearAllTasks);
// Controls end //