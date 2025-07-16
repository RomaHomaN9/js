import React, { useEffect, useState } from 'react';

function UseEffectComponent() {
    const [useEffectBool, setUseEffectBool] = useState(true);

    useEffect(() => {
        console.log('useEffect in renddering');
    }, [useEffectBool]);

    useEffect(() => {
        console.log('useEffect after rendder');
    }, [useEffectBool]);

    const onloadUseEffect = () => {
        setUseEffectBool(useEffectBool ? false : true);
    };

    return (
        <div>
            <button onClick={onloadUseEffect}>
                Оновити компонент(useEffectBool)
            </button>
            {useEffectBool ? <p>true</p> : <p>false</p>}
        </div>
    );
}

export default UseEffectComponent;
