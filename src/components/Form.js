import React from 'react';

const Form = ({todos, setTodos, inputText, setInputText, setStatus}) => {

    // Handles the input changes.
    const inputTextHandler = (e) => {
        e.preventDefault()
        setInputText(e.target.value)
    }

    // Handles the form submission.
    // It adds the new item after the existing items using the spread operator.
    const submitTextHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText('');
    }

    // Handles the updating of the Filter state.
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div className="form-area">
            <form>
                <label>Task</label>
                <input type="text" name="task" onChange={inputTextHandler} value={inputText} id="task"/>
                <input type="submit" value="+" onClick={submitTextHandler} />
                <label>Filter</label>
                <select id="filter" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </form>
        </div>
    );
}

export default Form;