import './scss/App.scss';
import Form from './components/Form'
import TodoList from './components/TodoList'
import React, { useState, useEffect } from 'react'

// In React, data flows from the tree top to the bottom.
// State and properties cannot be pushed to the top level,
// Hence why most properties and data is at the App or Top component.

function App() {

  /*--------  Variables*  --------*/
  // React Hook, State Hook format, essentially looks like a Getter and Setter.
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  /*--------  End Variables*  --------*/

  // React Hook: Apply side effects on state load
  useEffect(() => {

    // Retrieves data from browser local storage.
    const getLocalTodos = () => {
      if(localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      }
      else {
        let todoLocal = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)));
        setTodos(todoLocal)
      }
    }

    getLocalTodos()
  }, []);

  // React Hook: Apply side effects on state load
  // + load upon state [todos, status] is updated.
  useEffect(() => {
    const filteredHandler = () => {
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }

    // Saves the data to local storage.
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    filteredHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <p>Hello TodoList</p>
      </header>
      <Form
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
