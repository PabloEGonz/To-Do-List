const tasks = ['first', 'second', 'third'];

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
