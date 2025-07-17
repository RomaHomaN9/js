import React, { useEffect, useState } from 'react';

function List({ name, index, isWin, winButton }) {
    return (
        <>
            <input
                type="checkbox"
                checked={isWin.includes(index)}
                onChange={e => winButton(e, index)}
            />
            <span> - </span>
            {isWin.includes(index) ? <s className="s">{name}</s> : <>{name}</>}
        </>
    );
}

function ToDoList() {
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);
    const [isWin, setIsWin] = useState([]);
    const [select, setSelect] = useState(3);

    useEffect(() => {
        const items = localStorage.getItem('todos');

        if (items) {
            setList(JSON.parse(items));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(list));
    }, [list]);

    const addTask = () => {
        if (inputValue === '') return;
        let newList = [
            ...list,
            {
                id: list.length,
                name: inputValue
            }
        ];
        setList(newList);
    };

    const winTask = () => {
        const newList = list.filter(i => i.name !== inputValue);
        setList(newList);
    };

    const clearTasks = () => {
        localStorage.setItem('todos', JSON.stringify([]));
        setList([]);
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
            <input
                className="input"
                type="text"
                onChange={e => setInputValue(e.target.value)}
                minLength={1}
                maxLength={20}
            />
            <div className="buttons">
                <button
                    className="button-add"
                    type={'button'}
                    onClick={addTask}
                >
                    Добавити
                </button>
                {/* <button
                    className="button-win"
                    type={'button'}
                    onClick={winTask}
                >
                    Зроблено
                </button> */}
                <button
                    className="button-clear"
                    type={'button'}
                    onClick={clearTasks}
                >
                    Очистити
                </button>
            </div>
            <ul className="list">
                {list.map((list, index) => (
                    <li className="list-obj" key={index}>
                        {select === 1 && !isWin.includes(index) ? (
                            <List
                                name={list.name}
                                index={index}
                                isWin={isWin}
                                winButton={winButton}
                            />
                        ) : (
                            <></>
                        )}
                        {select === 2 && isWin.includes(index) ? (
                            <List
                                name={list.name}
                                index={index}
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
            </ul>
        </div>
    );
}

export default ToDoList;
