import './style.css';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import './images/enter.jpg';

import {
  displayList, addList, deleteAll, editTask,
} from './modules/displayList.js';

displayList();
addList();
editTask();
deleteAll();
