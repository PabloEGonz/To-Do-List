//Arrange
const taskArray = [
    {
    id: 1,
    description: "hello mundo",
    completed: false,
    },
    {
    id: 2,
    description: "hola world",
    completed: true,
    }
];

let obj1 = 'hola mundillo';
let obj2 = 'tengo hambre'; 

//edit
const editElemente = () => {
    taskArray[0].description = obj1;
    taskArray[1].description = obj2;    
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

  export { taskArray, editElemente , Status };

// // delete complete task

// const deleteAll = () => {
//     removeBtn.addEventListener('click', () => {
//       tasks = tasks.filter((t) => !t.completed);
//       displayList();
//       setLocalStorage();
//       editTask();
//     });
//   };