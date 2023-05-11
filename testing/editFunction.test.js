import { editElemente, taskArray } from "./editFunction";

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

describe ('edit original description', () =>{

    test('Testing is original input of description was edit correctly', () =>{
        
        //act 
        editElemente();

        //assest
        expect(taskArray[0].description).toBe("hola mundillo");
        expect(taskArray[1].description).toBe("tengo hambre");
    })

})