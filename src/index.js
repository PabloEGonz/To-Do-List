import './style.css';
import dots from './images/icon.jpg'
import checkBox from './images/checkBox.png'
import './images/enter.jpg'


const tasks = [
    {
        description: 'Do the dishes',
        completed: false,
        index: 0
    },
    {
        description: 'Study',
        completed: false,
        index: 1
    },
    {
        description: 'Do the dishes',
        completed: false,
        index: 2
    },
    {
        description: 'Watch series',
        completed: false,
        index: 3
    },
];

const listContainer = document.querySelector('.task-container');

let displayList = () => {
    listContainer.innerHTML = '';
    tasks.forEach((task) => {
        let list = document.createElement('li');
        list.classList.add('list');
        list.innerHTML = ` <img class'checkbox' src='${checkBox}'> <p>${task.description}</p> <img class='options' src='${dots}'> `;
        listContainer.appendChild(list);
    })
}
displayList();
