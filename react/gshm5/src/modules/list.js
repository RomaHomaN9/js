import React from 'react';

const OtherComponent = React.memo(() => {
    return <div>Я інший КОМПОНЕНТ</div>;
});

function List() {
    const [list, setList] = React.useState([1, 2, 3, 4, 5]);

    const deleteItem = index => {
        const newList = list.filter((_, i) => i !== index);
        setList(newList);
    };

    return (
        <div>
            <div>
                {list.map((item, index) => (
                    <p key={index}>
                        <button type="button" onClick={() => deleteItem(index)}>
                            Видалити
                        </button>
                        <span> - </span>
                        {item}
                    </p>
                ))}
            </div>
            <OtherComponent />
        </div>
    );
}

export default List;
