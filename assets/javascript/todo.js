let todos = [];

const AddToDO = () => {
  const todo = document.getElementById("todoInput").value;
  todos.push({ todoDetials: todo, checked: false });
  fillTodos();
};