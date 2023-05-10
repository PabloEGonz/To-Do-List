const tasks = [];

const addList = () => {
  //  submitBtn.addEventListener('click', (e) => {
        //e.preventDefault();
        const newTask = {
            description: 'take the trash out',
            completed: false,
            id: tasks.length + 1,
        };
        tasks.push(newTask);
    ;
};

const deleteItem = (i) => {
    if (optionBtn[i].src !== dots) {
        tasks.splice(i, 1);
    }
};

export { addList, deleteItem };
