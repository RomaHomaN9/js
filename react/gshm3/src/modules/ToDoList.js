import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
    }

    componentDidMount() {
        const items = localStorage.getItem('todos');

        if (items) {
            this.setState({ list: JSON.parse(items) });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.list !== this.state.list) {
            localStorage.setItem('todos', JSON.stringify(this.state.list));
        }
    }

    addTask = () => {
        if (this.state.inputValue === '') return;
        let newList = [
            ...this.state.list,
            {
                id: this.state.list.length,
                name: this.state.inputValue
            }
        ];
        this.setState({ list: newList });
    };

    winTask = () => {
        const newList = this.state.list.filter(
            i => i.name !== this.state.inputValue
        );
        this.setState({ list: newList });
    };

    clearTasks = () => {
        localStorage.setItem('todos', JSON.stringify([]));
        this.setState({ list: [] });
    };

    render() {
        return (
            <div>
                <input
                    type={'text'}
                    onChange={e =>
                        this.setState({ inputValue: e.target.value })
                    }
                />
                <br />
                <br />
                <button type={'button'} onClick={this.addTask}>
                    Добавити
                </button>
                <br />
                <br />
                <button type={'button'} onClick={this.winTask}>
                    Зроблено
                </button>
                <br />
                <br />
                <button type={'button'} onClick={this.clearTasks}>
                    Очистити
                </button>
                <ul>
                    {this.state.list.map((list, index) => (
                        <li key={index}>
                            <p>{list.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ToDoList;
