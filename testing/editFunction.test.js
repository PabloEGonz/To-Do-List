import { editElement, taskArray, Status, deleteAll } from "./editFunction";

function createLocalStorageMock() {
  let store = [];
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = [];
    },
  };
}
const localStorageMock = createLocalStorageMock();
global.localStorage = localStorageMock;

describe('edit original description', () => {

  test('Testing is original input of description was edit correctly', () => {

    //act 
    editElement();

    //assest
    expect(taskArray[0].description).toBe("hola mundillo");
    expect(taskArray[1].description).toBe("tengo hambre");
  });

  test('change status of completed key from false to true or backwards', () => {

    //arrange
    const checkStatus = new Status(taskArray[0].completed);
    const checkStatus1 = new Status(taskArray[1].completed);

    // act
    taskArray[0].completed = checkStatus.on();
    taskArray[1].completed = checkStatus1.off();

    //assest
    expect(taskArray[0].completed).toBeTruthy();
    expect(taskArray[1].completed).toBeFalsy();
  });

  test('Removes the tasks that are completed', () => {
    deleteAll();
    expect(taskArray).toHaveLength(1);
    expect(taskArray).not.toContain(`{
      id: 1,
      description: "Do laundry",
      completed: true,
    }`)
  })

});