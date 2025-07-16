import React, { useLayoutEffect, useState } from 'react';

function UseLayoutEffectComponent() {
    const [useLayoutEffectNumP, setUseLayoutEffectNumP] = useState(0);
    const [massif, setMassif] = useState([]);

    useLayoutEffect(() => {
        let newMassif = [];
        for (let i = 0; i < useLayoutEffectNumP; i++) {
            newMassif.push('hello');
        }
        setMassif([...newMassif]);
    }, [useLayoutEffectNumP]);

    const addParagraf = () => {
        setUseLayoutEffectNumP(prev => prev + 1);
    };

    return (
        <div>
            <button onClick={addParagraf}>Додати параграф</button>
            <div>
                {massif.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        </div>
    );
}

export default UseLayoutEffectComponent;
