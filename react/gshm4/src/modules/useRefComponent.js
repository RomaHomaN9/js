import React, { useRef } from 'react';

function UseRefComponent() {
    const text = useRef();

    const focus = () => {
        text.current.focus();
    };

    return (
        <div>
            <input ref={text} />
            <button onClick={focus}>Фокус</button>
            <button>Блюр</button>
        </div>
    );
}

export default UseRefComponent;
