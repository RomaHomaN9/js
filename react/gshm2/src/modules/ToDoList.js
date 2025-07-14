import React, { useState } from 'react';

function ToDoList() {
    const [inputValue, setInputValue] = useState('');

    const [list, setList] = useState([
        { id: 0, win: false, name: 'Поїсти' },
        { id: 1, win: false, name: 'Почистити зуби' },
        { id: 2, win: false, name: 'Спать' }
    ]);

    const addTask = () => {
        if (inputValue === '') return;
        setList([
            ...list,
            {
                id: list.length,
                win: false,
                name: inputValue
            }
        ]);
    };

    const clearTasks = () => {
        let newList = [...list];
        for (let i = 0; i < newList.length; i++) {
            if (newList[i].name == inputValue) {
                newList[i].name = 'Зроблено)';
                newList[i].win = true;
                setList(newList);
                return;
            }
        }
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
                    <li key={index}>
                        {list.win ? (
                            <p class="green">{list.name}</p>
                        ) : (
                            <p class="red">{list.name}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
