import './style.css';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import './images/enter.jpg';
import './images/reload.png';

import {
  displayList, addList, deleteAll, editTask, reload,
} from './modules/displayList.js';

displayList();
addList();
editTask();
deleteAll();
reload();
