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
  tasks.forEach((task) => {
    const list = document.createElement('li');
    list.classList.add('list');
    list.innerHTML = ` <img class='checkbox' src='${checkBox}'> <p class='task-description'>${task.description}</p> <img class='options' src='${dots}'> `;
    listContainer.appendChild(list);
  });
};
displayList();
const submitBtn = document.querySelector('#submitBtn');
const addInput = document.querySelector('.add');
//const addTask = ()=>
const getLocalStorage = () => {
  let localTasks = localStorage.getItem('tasks');
  if (localTasks) {
    tasks = JSON.parse(localTasks);
    displayList();

  }
}
getLocalStorage();
console.log(tasks)
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let newTask = {
    description: addInput.value,
    completed: false,
    index: tasks.length
  }
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayList();
  check();
})

const optionBtn = document.getElementsByClassName('options');
const taskDescription = document.getElementsByClassName('task-description');
const listElem = document.getElementsByClassName('list');


const checked = document.getElementsByClassName('checkbox');
const check = () => {
  for (let i = 0; i < optionBtn.length; i++) {
    optionBtn[i].addEventListener('click', () => {
      listElem[i].classList.add('edit')
      listElem[i].innerHTML = `<img class='checkbox' src='${checkBox}'> <input class="add" type="text" value=${taskDescription[i].textContent} > <img class='options' src='${trashIcon}'>`
      
    })
  }

  for (let i = 0; i < checked.length; i++) {
    checked[i].addEventListener('click', () => {
      checked[i].src = completeIcon;
    })
  }
}
check();




