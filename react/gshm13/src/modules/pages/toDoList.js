import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

            <Link to={`/todo-list/${index}`} className="button-rename">
                Перейменнувати
            </Link>
        </>
    );
}

function ToDoList() {
    const [list, setList] = useState([]);
    const [isWin, setIsWin] = useState([]);
    const [select, setSelect] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('todos'));

        if (items.length === 0) {
            setList(items);
        } else if (localStorage.getItem('password') != 'null') {
            axios
                .get(
                    `http://localhost:3030/account/${localStorage.getItem(
                        'password'
                    )}`
                )
                .then(res => {
                    setList(res.data.tasks);
                })
                .catch(() => {
                    navigate('/error-page');
                });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(list));
    }, [list]);

    const addTask = () => {
        let newInputValue = prompt('Яке завдання записати?');
        if (newInputValue === 'null') return;

        console.log(list);

        let newList = [
            ...list,
            {
                id: list.length,
                name: newInputValue
            }
        ];

        setList(newList);

        axios
            .get(
                `http://localhost:3030/account/${localStorage.getItem(
                    'password'
                )}`
            )
            .then(res => {
                let newTasksFromBG = res.data;

                newTasksFromBG.tasks = [
                    ...newTasksFromBG.tasks,
                    {
                        id: String(newTasksFromBG.tasks.length),
                        name: newInputValue
                    }
                ];

                axios.patch(
                    `http://localhost:3030/account/${localStorage.getItem(
                        'password'
                    )}`,
                    newTasksFromBG
                );
            })
            .catch(() => {
                navigate('/error-page');
            });
    };

    const clearTasks = () => {
        localStorage.setItem('todos', JSON.stringify([]));
        setList([]);
        axios
            .get(
                `http://localhost:3030/account/${localStorage.getItem(
                    'password'
                )}`
            )
            .then(res => {
                const tasks = res.data;
                tasks.forEach(task => {
                    axios
                        .delete(
                            `http://localhost:3030/account/${localStorage.getItem(
                                'password'
                            )}/${task.id}`
                        )
                        .catch(() => {
                            navigate('/error-page');
                        });
                });
            })
            .catch(() => {
                navigate('/error-page');
            });
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
                break;
            default:
                navigate('/error-page');
        }
    };

    const winButton = (e, index) => {
        if (e.target.checked) {
            setIsWin([...isWin, index]);
        } else {
            setIsWin(isWin.filter(i => i !== index));
        }
    };

    return (
        <div className="to-do-list">
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
