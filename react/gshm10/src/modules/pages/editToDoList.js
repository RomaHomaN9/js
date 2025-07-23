import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditToDoList() {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('todos'));

        if (items.length > 0) {
            setInputValue(items[id]);
        } else {
            axios
                .get(
                    `http://localhost:3030/account/${localStorage.getItem(
                        'password'
                    )}`
                )
                .then(response => {
                    setInputValue(response.data[id]);
                })
                .catch(() => {
                    navigate('/error-page');
                });
        }
    }, []);

    const rename = () => {
        if (inputValue === 'null') return;
        axios
            .put(
                `http://localhost:3030/account/${localStorage.getItem(
                    'password'
                )}/${id}`,
                {
                    name: inputValue
                }
            )
            .catch(() => {
                navigate('/error-page');
            });
    };

    return (
        <div className="to-do-list">
            <input
                className="rename-input"
                type="text"
                value={inputValue.name}
                onChange={item => setInputValue(item.target.value)}
            />
            <button
                type="button"
                className="edit-to-do-list-button"
                onClick={rename}
            >
                Зберегти зміни
            </button>
            <Link className="edit-to-do-list-button" to="/todo-list/">
                Перейти на
                <br /> to do list
            </Link>
        </div>
    );
}

export default EditToDoList;
