import React, { useState } from 'react';

function UseStateComponent() {
    const allNames = ['Ruslan', 'Alina', 'Roman', 'Bohdan', 'Nazar'];
    const [ramdomName, setRamdomName] = useState('');

    const newName = () => {
        let newRamdomName = allNames[Math.floor(Math.random() * 5)];
        setRamdomName(newRamdomName);
    };

    return (
        <div>
            <button onClick={newName}>Привітайся</button>
            <p>Hello {ramdomName}</p>
        </div>
    );
}

export default UseStateComponent;
