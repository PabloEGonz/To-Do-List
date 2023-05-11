const tasks = [{
  description: 'Do laundry',
  completed: false,
  id: 1,
},
{
  description: 'buy groceries',
  completed: false,
  id: 2,
},
{
  description: 'Do homework',
  completed: false,
  id: 3,
}];

const addList = () => {
  const newTask = {
    description: 'take the trash out',
    completed: false,
    id: tasks.length + 1,
  };
  tasks.push(newTask);
};

const deleteItem = (i) => {
  tasks.splice(i, 1);
};

export { addList, deleteItem, tasks };
