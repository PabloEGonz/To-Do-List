import {
  displayList, addList, deleteAll, editTask, reload, submitBtn,
} from './modules/displayList.js';
import './style.css';
import enter from './images/enter.jpg';
import reloadI from './images/reload.png';

const reloadImage = document.querySelector('.reload');
reloadImage.src = reloadI;
submitBtn.style.backgroundImage = `url('${enter}')`;

displayList();
addList();
editTask();
deleteAll();
reload();
