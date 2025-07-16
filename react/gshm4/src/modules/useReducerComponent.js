import React, { useReducer, useState } from 'react';

function UseReducerComponent() {
    const editData = (state, action) => {
        switch (action.type) {
            case 'name':
                return { ...state, name: inputData.name };
            case 'lastName':
                return { ...state, lastName: inputData.lastName };
            case 'birthYear':
                return { ...state, birthYear: inputData.birthYear };
        }
    };

    const [inputData, setInputData] = useState({
        name: '',
        lastName: '',
        birthYear: ''
    });

    const [userData, dispatch] = useReducer(editData, {
        name: '',
        lastName: '',
        birthYear: ''
    });

    const renameData = e => {
        dispatch({ type: e.target.name });
    };

    return (
        <div>
            <input
                type="text"
                onChange={e => {
                    let newInputData = { ...inputData };
                    newInputData.name = e.target.value;
                    setInputData(newInputData);
                }}
            ></input>

            <button name="name" onClick={renameData}>
                Ім'я
            </button>

            <br />
            <br />

            <input
                type="text"
                onChange={e => {
                    let newInputData = { ...inputData };
                    newInputData.lastName = e.target.value;
                    setInputData(newInputData);
                }}
            ></input>

            <button name="lastName" onClick={renameData}>
                Прізвище
            </button>

            <br />
            <br />

            <input
                type="number"
                onChange={e => {
                    let newInputData = { ...inputData };
                    newInputData.birthYear = e.target.value;
                    setInputData(newInputData);
                }}
            ></input>

            <button name="birthYear" onClick={renameData}>
                Рік народження
            </button>

            <br />
            <br />

            <p>Name: {userData.name}</p>
            <p>Last name: {userData.lastName}</p>
            <p>Birth year: {userData.birthYear}</p>
        </div>
    );
}

export default UseReducerComponent;
