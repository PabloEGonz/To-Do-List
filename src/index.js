import './style.css';
import dots from './images/threeDots.png';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import checkBox from './images/checkbox.png';
import './images/enter.jpg';
import trashIcon from './images/trash.png'
import completeIcon from './images/completed.png'
let tasks = [];

const listContainer = document.querySelector('.task-container');

const displayList = () => {
  listContainer.innerHTML = '';
  tasks.forEach((task, index) => {
    task.index = index;
    const list = document.createElement('li');
    list.classList.add('list');
    list.innerHTML = ` <img class='checkbox' src='${checkBox}'> <p class='task-description'>${task.description}</p> <img class='options' src='${dots}'> `;
    listContainer.appendChild(list);
  });
};
displayList();

const submitBtn = document.querySelector('#submitBtn');
const addInput = document.querySelector('.add');
let localTasks = localStorage.getItem('tasks');
const getLocalStorage = () => {
  if (localTasks) {
    tasks = JSON.parse(localTasks);
    displayList();
  }
}
getLocalStorage();

const setLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let newTask = {
    description: addInput.value,
    completed: false,
    index: tasks.length
  }
  tasks.push(newTask);
  setLocalStorage();
  displayList();
  check();
})

const optionBtn = document.getElementsByClassName('options');
const taskDescription = document.getElementsByClassName('task-description');
const listElem = document.getElementsByClassName('list');
const checked = document.getElementsByClassName('checkbox');

const check = () => {
  for (let i = 0; i < optionBtn.length; i++) {
    taskDescription[i].addEventListener('dblclick', () => {
      removeSingle();
      taskDescription[i].innerHTML = `<input class="add" id="edit-input" type="text" value="${tasks[i].description}"></input>`
      optionBtn[i].src = trashIcon;
      listElem[i].classList.add('edit');
      let editInput = document.querySelector('#edit-input');
      editInput.focus();
      editInput.addEventListener('blur', () => {
        tasks[i].description = editInput.value;
        setTimeout(update, 222);
      });
    })
  }
  const removeSingle = () => {
    for (let i = 0; i < optionBtn.length; i++) {
      optionBtn[i].addEventListener('click', () => {
        if (optionBtn[i].src !== dots) {
          tasks.splice(i, 1);
          update();
        }
      })
    }
  }


  for (let i = 0; i < checked.length; i++) {
    checked[i].addEventListener('click', () => {
      if (tasks[i].completed === false) {
        taskDescription[i].classList.add('crossed');
        checked[i].src = completeIcon;
        tasks[i].completed = true;
      } else {
        taskDescription[i].classList.remove('crossed');
        checked[i].src = checkBox;
        tasks[i].completed = false;
      }
    })
  }
}
check();

const update = () => {
  displayList();
  setLocalStorage();
  check();
};

const removeBtn = document.querySelector('.remove');
const deleteAll = () => {
  removeBtn.addEventListener('click', () => {
    for (let i = 0; i < checked.length; i++) {
      if (tasks[i].completed) {
        tasks.splice(i, 1);
      }
      update();
    }
  })
}
deleteAll();

