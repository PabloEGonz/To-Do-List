import completeIcon from '../images/completed.png';
import checkBox from '../images/checkbox.png';
import dots from '../images/threeDots.png';

import trashIcon from '../images/trash.png';

let tasks = [];
const setLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const listContainer = document.querySelector('.task-container');

const displayList = () => {
    listContainer.innerHTML = '';
    tasks.forEach((task, index) => {
        let checkTask;
        let crossed;
        if (task.completed) {
            checkTask = completeIcon;
            crossed = 'crossed';
        } else {
            checkTask = checkBox;
        }
        task.index = index;
        const list = document.createElement('li');
        list.classList.add('list');
        list.innerHTML = ` <img class='checkbox' src='${checkTask}'> <p class='task-description ${crossed}'>${task.description}</p> <img class='options' src='${dots}'> `;
        listContainer.appendChild(list);
    });
};
displayList();

const localTasks = localStorage.getItem('tasks');
const getLocalStorage = () => {
    if (localTasks) {
        tasks = JSON.parse(localTasks);
        displayList();
    }
};
getLocalStorage();



const optionBtn = document.getElementsByClassName('options');
const taskDescription = document.getElementsByClassName('task-description');
const listElem = document.getElementsByClassName('list');
const checked = document.getElementsByClassName('checkbox');

const removeBtn = document.querySelector('.remove');



const editTask = () => { /* eslint-disable no-loop-func */
    for (let i = 0; i < optionBtn.length; i += 1) {
        taskDescription[i].addEventListener('click', () => {
            taskDescription[i].innerHTML = `<input class="add" id="edit-input" type="text" value="${tasks[i].description}"></input>`;
            optionBtn[i].src = trashIcon;
            listElem[i].classList.add('edit');
            const editInput = document.querySelector('#edit-input');
           // editInput.focus();
            editInput.addEventListener('focus', () => {
                output(i);
            })
            const output = (pos) => {
                editInput.addEventListener('focusout', () => {
                    tasks[pos].description = editInput.value;
                    // setTimeout(displayList, 122);
                    setTimeout(editTask, 222);
                    displayList();
                    // editTask();
                });
            }

        });

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
                setLocalStorage();
            });

            optionBtn[i].addEventListener('click', () => {
                if (optionBtn[i].src !== dots) {
                    tasks.splice(i, 1);
                    displayList();
                    setLocalStorage();
                    editTask();
                }
            });
    }
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
            index: tasks.length,
        };
        tasks.push(newTask);
        setLocalStorage();
        displayList();
        editTask();
    });
};

const deleteAll = () => {
    removeBtn.addEventListener('click', () => {
        tasks = tasks.filter(t => !t.completed);
        displayList();
        setLocalStorage();
        editTask();
    });
};
deleteAll();

export {
    displayList, addList, deleteAll, editTask,
};
