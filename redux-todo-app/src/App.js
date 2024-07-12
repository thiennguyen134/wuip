import React, { useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";
import './App.css';

function App() {
  const store = createStore(todosReducer);

  return (
    <Provider store={store}>
      <Banner />
      <ToDoFormAndList />
    </Provider>
  );
}

function Banner() {
  return <h1>Todo List</h1>;
}

function ToDoFormAndList() {
  const [itemText, setItemText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(itemText);
    dispatch(addTodo(itemText));
    setItemText("");
  };

  const removeItem = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemText}
          onChange={(event) => setItemText(event.target.value)}
          placeholder="Write a new todo here"
        />
        <input type="submit" value="Add" />
      </form>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.text + " "}{" "}
            <span onClick={() => removeItem(item.id)}> x </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function addTodo(text) {
  return { type: "ADD_TODO", text: text, id: Math.random() };
}

function removeTodo(id) {
  return { type: "REMOVE_TODO", id: id };
}

function todosReducer(state = { todos: [] }, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { text: action.text, id: action.id }],
      };
    case "REMOVE_TODO":
      const newTodos = state.todos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
}

export default App;
