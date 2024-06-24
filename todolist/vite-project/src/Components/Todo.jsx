import React from 'react';

const Todo = ({ todos, deleteTodo }) => {
    return (
        <div>
            {todos.length > 0 ? (
                todos.map((todo, index) => (
                    <div className="box" key={index}>
                        <div className="todo">
                            <p>{todo}</p>
                            <div className="actions">
                                <input type="checkbox" className="action-checkbox" />
                                <button className="delete-btn" onClick={() => deleteTodo(index)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
}

export default Todo;
