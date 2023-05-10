import addList from './funcionality.js';

//const addList = funcionality.addList;

describe('Add', () => {
    test('new element is added to the array', () => {
        //arrange
        const array = [];
        addList();
        expect(tasks).toHaveLength(1);
    })
})
