import React, { useState } from 'react';

function ToDoList() {
    const [inputValue, setInputValue] = useState('');

    const [list, setList] = useState([]);

    const addTask = () => {
        setList([...list, inputValue]);
    };

    const clearTasks = () => {
        setList([]);
    };

    return (
        <div>
            <input
                id={'task'}
                type={'text'}
                onChange={e => setInputValue(e.target.value)}
            />
            <br />
            <br />
            <button onClick={addTask}>Добавити</button>
            <br />
            <br />
            <button onClick={clearTasks}>Очистити</button>
            <ul>
                {list.map((list, index) => (
                    <li key={index}>{list}</li>
                ))}
            </ul>
        </div>
    );
}
export default ToDoList;
