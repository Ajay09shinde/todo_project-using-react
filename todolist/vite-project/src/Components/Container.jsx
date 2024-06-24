import React from 'react';

function Container({ inputVal, writeTodo, addTodo }) {
    return (
        <div>
            <input type="text" value={inputVal} onChange={writeTodo} />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

export default Container;
