const todoInputForm = document.querySelector("#todo-form");
const todoInputValue = document.querySelector("#todo-form input");
const listComponents = document.querySelector(".main-todo__list-components");
const todoLists = document.querySelector(".main-todo__list");
const TODOS_KEY = "todos";
let todos = [];

const buttonHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>`;

const storeTodoInList = function () {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const deleteTodo = function (e) {
  const li = e.target.parentElement.parentElement;
  console.log(li);
  const newTodos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
  todos = newTodos;
  storeTodoInList();
  renderingComponentsAll();
};

const renderingComponents = function (object) {
  const todoComponent = document.createElement("div");
  const todoComponentTitle = document.createElement("div");
  const todoComponentTitleH3 = document.createElement("h3");
  const todoComponentX = document.createElement("div");
  const todoComponentXButton = document.createElement("button");
  const objValue = object.value;
  const objID = object.id;

  todoComponent.classList.add("list-component");
  todoComponent.id = objID;
  todoComponentTitle.classList.add("list-component__title");
  todoComponentX.classList.add("list-component__button");

  todoComponentTitleH3.innerText = objValue;
  todoComponentXButton.addEventListener("click", deleteTodo);

  listComponents.appendChild(todoComponent);
  todoComponent.appendChild(todoComponentTitle);
  todoComponent.appendChild(todoComponentX);
  todoComponentTitle.appendChild(todoComponentTitleH3);
  todoComponentX.appendChild(todoComponentXButton);
  todoComponentXButton.innerHTML = buttonHTML;
};

const renderingComponentsAll = function () {
  listComponents.innerHTML = "";
  if (todos.length) {
    todos.forEach((obj) => {
      renderingComponents(obj);
    });
  }
};

const getAndSaveTodo = function (e) {
  e.preventDefault();
  const id = Date.now();
  const value = todoInputValue.value;
  todoInputValue.value = "";
  todos.push({ id, value });
  storeTodoInList();
  renderingComponentsAll();
};

const initUploadTodos = function () {
  const currentTodos = localStorage.getItem(TODOS_KEY);
  if (currentTodos) {
    const parsedTodos = JSON.parse(currentTodos);
    todos = parsedTodos;
    storeTodoInList();
  }
};

todoInputForm.addEventListener("submit", getAndSaveTodo);
todoLists.scrollIntoView(true);
initUploadTodos();
renderingComponentsAll();
