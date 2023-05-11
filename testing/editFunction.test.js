import { editElemente } from "./editFunction";

const MockHtml= "";
MockHtml.innerHTML `
<label>
<input value="${}">
<label> `; 

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

describe ((editElemente) =>{

    test('Testing is original input of description was edit correctly', () =>{
        //arrange
        document.body.innerHTML =
        '<div>' +
        '  <input id="username" value="hello world!"/>' +
        '  <button id="button" />' +
        '</div>';
        
        const value1 = "Hello world!";




    })

})