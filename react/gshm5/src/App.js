import React, { useState } from 'react';
import SumNum from './modules/sumNum.js';
import List from './modules/list.js';
import OtherState from './modules/otherState.js';

function App() {
    const [component, setComponent] = useState(0);
    return (
        <div>
            <button type="button" onClick={() => setComponent(1)}>
                Вправа 1
            </button>
            <button type="button" onClick={() => setComponent(2)}>
                Вправа 2
            </button>
            <button type="button" onClick={() => setComponent(3)}>
                Вправа 3
            </button>
            <br />
            <br />
            <br />
            {component === 1 ? <SumNum /> : <></>}
            {component === 2 ? <List /> : <></>}
            {component === 3 ? <OtherState /> : <></>}
        </div>
    );
}

export default App;
