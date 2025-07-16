import React, { useMemo, useState } from 'react';

function SumNum() {
    const [massifNum, setMassifNum] = useState([1, 2, 3, 4, 5, 6]);

    const memoizedMassifSumNum = useMemo(() => {
        let sumNum = 0;

        for (let i = 0; i < massifNum.length; i++) {
            sumNum += massifNum[i];
        }

        return sumNum;
    }, [massifNum]);

    const memoizedMassifNum = useMemo(() => {
        return massifNum;
    }, [massifNum]);

    const onloadNum = () => {
        let newMassifNum = [];
        for (let i = 0; i < 6; i++) {
            newMassifNum.push(Math.floor(Math.random() * 20) - 10);
        }
        setMassifNum(newMassifNum);
    };

    return (
        <div>
            <p>
                {memoizedMassifNum.map((item, index) => (
                    <span key={index}>
                        {index === 0 ? <></> : <span>+</span>}
                        {item}
                    </span>
                ))}
                <span>=</span>
                {memoizedMassifSumNum}
            </p>
            <button type="button" onClick={onloadNum}>
                Оновити числа
            </button>
        </div>
    );
}

export default SumNum;
