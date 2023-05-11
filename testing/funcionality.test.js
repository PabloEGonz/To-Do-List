import { addList, deleteItem, tasks } from './funcionality.js';

function createLocalStorageMock() {
  let store = {};
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
      store = {};
    },
  };
}
const localStorageMock = createLocalStorageMock();
global.localStorage = localStorageMock;

describe('Add', () => {
  test('new element is added to the array', () => {
    addList();
    expect(tasks).toHaveLength(4);
  });
  test('check the new element', () => {
    addList();
    expect(tasks[3]).toHaveProperty('description');
  });
});

describe('delete', () => {
  test('length of the array is less', () => {
    deleteItem(1);
    expect(tasks).toHaveLength(4);
  });
  test('check element was removed', () => {
    deleteItem(0);
    expect(tasks).not.toContain('first');
  });
});