import React, { useState } from 'react';
import './App.css';
import Container from './Components/Container';
import Todo from './Components/Todo';

function App() {
    const [inputVal, setInputVal] = useState('');
    const [Todos, setTodos] = useState([]);

    function writeTodo(e) {
        setInputVal(e.target.value);
    }

    function addTodo() {
        if (inputVal !== '') {
            setTodos((prevTodos) => [...prevTodos, inputVal]);
            setInputVal('');
        }
    }

    function deleteTodo(index) {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    }

    return (
        <>
            <main>
                <h1>To Do List</h1>
                <Container inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
                <Todo todos={Todos} deleteTodo={deleteTodo} />
            </main>
        </>
    );
}

export default App;
