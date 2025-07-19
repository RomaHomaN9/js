import React, { useEffect, useState } from 'react';
import axios from 'axios';

function List({ name, index, isWin, winButton, rename }) {
    return (
        <>
            <input
                type="checkbox"
                checked={isWin.includes(index)}
                onChange={e => winButton(e, index)}
            />

            <span> - </span>

            {isWin.includes(index) ? <s className="s">{name}</s> : <>{name}</>}

            <span> -- </span>

            <button className="button-rename" onClick={() => rename(index)}>
                Перейменнувати
            </button>
        </>
    );
}

function ToDoList() {
    const [list, setList] = useState([]);
    const [isWin, setIsWin] = useState([]);
    const [select, setSelect] = useState(3);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('todos'));

        if (items.length > 0) {
            setList(items);
        } else {
            axios
                .get('http://localhost:3030/tasks')
                .then(response => {
                    setList(response.data);
                })
                .catch(err => console.error(err));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(list));
    }, [list]);

    const addTask = () => {
        let newInputValue = prompt('Яке завдання записати?');
        let newList = [
            ...list,
            {
                id: list.length,
                name: newInputValue
            }
        ];
        setList(newList);

        axios
            .post('http://localhost:3030/tasks', {
                id: list.length,
                name: newInputValue
            })
            .catch(err => console.error(err));
    };

    const clearTasks = () => {
        localStorage.setItem('todos', JSON.stringify([]));
        setList([]);
        axios
            .get('http://localhost:3030/tasks')
            .then(response => {
                const tasks = response.data;
                tasks.forEach(task => {
                    axios
                        .delete(`http://localhost:3030/tasks/${task.id}`)
                        .then(() => console.log(`Видалено task ${task.id}`))
                        .catch(err => console.error(err));
                });
            })
            .catch(err => console.error(err));
    };

    const selectTask = selectItem => {
        switch (selectItem) {
            case 'active':
                setSelect(1);
                break;
            case 'win':
                setSelect(2);
                break;
            case 'all':
                setSelect(3);
        }
    };

    const winButton = (e, index) => {
        if (e.target.checked) {
            setIsWin([...isWin, index]);
        } else {
            setIsWin(isWin.filter(i => i !== index));
        }
    };

    const rename = index => {
        let newList = [...list];
        let input = String(prompt('Перейменнувати на...'));
        newList[index].name = input;
        setList(newList);
        axios
            .put(`http://localhost:3030/tasks/${index}`, {
                name: input
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <div className="buttons-select">
                <button type="button" onClick={() => selectTask('active')}>
                    Активні
                </button>
                <button type="button" onClick={() => selectTask('win')}>
                    Завершені
                </button>
                <button type="button" onClick={() => selectTask('all')}>
                    Всі
                </button>
            </div>
            <div className="buttons">
                <button
                    className="button-add"
                    type={'button'}
                    onClick={addTask}
                >
                    Добавити
                </button>
                <button
                    className="button-clear"
                    type={'button'}
                    onClick={clearTasks}
                >
                    Очистити
                </button>
            </div>
            <ul className="list">
                {list.length > 0 ? (
                    <>
                        {list.map((list, index) => (
                            <li className="list-obj" key={index}>
                                {select === 1 && !isWin.includes(index) ? (
                                    <List
                                        name={list.name}
                                        index={list.id}
                                        isWin={isWin}
                                        winButton={winButton}
                                        rename={rename}
                                    />
                                ) : (
                                    <></>
                                )}
                                {select === 2 && isWin.includes(index) ? (
                                    <List
                                        name={list.name}
                                        index={list.id}
                                        isWin={isWin}
                                        winButton={winButton}
                                        rename={rename}
                                    />
                                ) : (
                                    <></>
                                )}
                                {select === 3 ? (
                                    <List
                                        name={list.name}
                                        index={index}
                                        isWin={isWin}
                                        winButton={winButton}
                                        rename={rename}
                                    />
                                ) : (
                                    <></>
                                )}
                            </li>
                        ))}
                    </>
                ) : (
                    <li>Наразі у вас немає щє завдань</li>
                )}
            </ul>
        </div>
    );
}

export default ToDoList;
