import completeIcon from '../images/completed.png';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import checkBox from '../images/checkBox.png';
import dots from '../images/threeDots.png';
import trashIcon from '../images/trash.png';
import Status from './checkbox.js';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const setLocalStorage = () => localStorage.setItem('tasks', JSON.stringify(tasks));

const listContainer = document.querySelector('.task-container');

const displayList = () => {
  listContainer.innerHTML = '';
  tasks.forEach((task, index) => {
    let checkTask;
    let crossed;
    if (task.completed) {
      checkTask = completeIcon;
      crossed = 'crossed';
    } else checkTask = checkBox;

    task.id = index + 1;
    const list = document.createElement('li');
    list.classList.add('list');
    list.innerHTML = ` <img class='checkbox' src='${checkTask}'> <p class='task-description ${crossed}'>${task.description}</p> <img class='options' src='${dots}'> `;
    listContainer.appendChild(list);
  });
};
displayList();

const optionBtn = document.getElementsByClassName('options');
const taskDescription = document.getElementsByClassName('task-description');
const listElem = document.getElementsByClassName('list');
const checked = document.getElementsByClassName('checkbox');

const onTaskDescriptionClick = (i) => {
  taskDescription[i].innerHTML = `<input class="add" id="edit-input" type="text" value="${tasks[i].description}"></input>`;
  optionBtn[i].src = trashIcon;
  listElem[i].classList.add('edit');
  const editInput = document.querySelector('#edit-input');
  editInput.focus();
  editInput.addEventListener('change', () => {
    tasks[i].description = editInput.value;
    setLocalStorage();
  });
  editInput.addEventListener('blur', () => {
    setTimeout(displayList, 232);
    // eslint-disable-next-line no-use-before-define
    setTimeout(editTask, 232);
  });
};

const onCheckedClick = (i) => {
  const checkStatus = new Status(tasks[i].completed);
  if (!tasks[i].completed) {
    tasks[i].completed = checkStatus.on();
  } else {
    tasks[i].completed = checkStatus.off();
  }
  displayList();
  setLocalStorage();
  // eslint-disable-next-line no-use-before-define
  editTask();
};

const deleteItem = (i) => {
  if (optionBtn[i].src !== dots) {
    tasks.splice(i, 1);
    displayList();
    setLocalStorage();
    // eslint-disable-next-line no-use-before-define
    editTask();
  }
};

const editTask = () => {
  Array.from(optionBtn).forEach((btn, i) => {
    taskDescription[i].addEventListener('click', () => onTaskDescriptionClick(i));
    checked[i].addEventListener('click', () => onCheckedClick(i));
    btn.addEventListener('click', () => deleteItem(i));
  });
};

editTask();

const submitBtn = document.querySelector('#submitBtn');
const addInput = document.querySelector('.add');

const addList = () => {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newTask = {
      description: addInput.value,
      completed: false,
      id: tasks.length + 1,
    };
    tasks.push(newTask);
    setLocalStorage();
    displayList();
    editTask();
    addInput.value = '';
  });
};
const removeBtn = document.querySelector('.remove');

const deleteAll = () => {
  removeBtn.addEventListener('click', () => {
    tasks = tasks.filter((t) => !t.completed);
    displayList();
    setLocalStorage();
    editTask();
  });
};
deleteAll();

const reload = () => {
  document.querySelector('.reload').addEventListener('click', () => {
    listContainer.innerHTML = '';
    setTimeout(displayList, 100);
    setTimeout(editTask, 100);
  });
};
reload();

export {
  displayList, addList, deleteAll, editTask, reload, submitBtn,
};
