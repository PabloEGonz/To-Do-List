// Arrange
let taskArray = [
  {
    id: 1,
    description: 'Do laundry',
    completed: false,
  },
  {
    id: 2,
    description: 'Read a book',
    completed: true,
  },
];

const task1 = 'hola mundillo';
const task2 = 'tengo hambre';

// edit
const editElement = () => {
  taskArray[0].description = task1;
  taskArray[1].description = task2;
  localStorage.setItem('tasks', JSON.stringify(taskArray));
};

// boolean change
class Status {
  constructor(state = false) {
    this.state = state;
  }

  current() {
    return this.state;
  }

  on() {
    this.state = true;
    return this.state;
  }

  off() {
    this.state = false;
    return this.state;
  }
}

// delete complete task
const deleteAll = () => {
  taskArray = taskArray.filter((t) => !t.completed);
};

export {
  taskArray, editElement, Status, deleteAll,
};