import React, { useState } from 'react';
import './App.css';
import UseEffectComponent from './modules/useEffectComponent.js';
import UseLayoutEffectComponent from './modules/useLayoutEffectComponent.js';
import UseStateComponent from './modules/useStateComponent.js';
import UseReducerComponent from './modules/useReducerComponent.js';
import UseRefComponent from './modules/useRefComponent.js';

function App() {
    const [component, setComponent] = useState(0);

    const chengeComponent = e => {
        e = e.target.name;
        switch (e) {
            case 'useEffect':
                setComponent(1);
                break;
            case 'useLayoutEffect':
                setComponent(2);
                break;
            case 'useState':
                setComponent(3);
                break;
            case 'useReducer':
                setComponent(4);
                break;
            case 'useRef':
                setComponent(5);
                break;
        }
    };
    return (
        <div>
            <button type="button" name="useEffect" onClick={chengeComponent}>
                useEffect
            </button>
            <button
                type="button"
                name="useLayoutEffect"
                onClick={chengeComponent}
            >
                useLayoutEffect
            </button>
            <button type="button" name="useState" onClick={chengeComponent}>
                useState
            </button>
            <button type="button" name="useReducer" onClick={chengeComponent}>
                useReducer
            </button>
            <button type="button" name="useRef" onClick={chengeComponent}>
                useRef
            </button>
            <br />
            <br />
            <br />
            {component === 1 ? <UseEffectComponent /> : ''}
            {component === 2 ? <UseLayoutEffectComponent /> : ''}
            {component === 3 ? <UseStateComponent /> : ''}
            {component === 4 ? <UseReducerComponent /> : ''}
            {component === 5 ? <UseRefComponent /> : ''}
        </div>
    );
}

export default App;
