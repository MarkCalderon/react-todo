import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {

    // Handles the delete option, which filters out the selected item.
    const deleteHandler = () => {
        // console.log(todo)
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    // Handles the done option, which sets the opposite of the completed.
    const doneHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span>{text}</span>
            <button onClick={doneHandler} className="done">done</button>
            <button onClick={deleteHandler} className="delete">delete</button>
        </div>
    )
}

export default Todo