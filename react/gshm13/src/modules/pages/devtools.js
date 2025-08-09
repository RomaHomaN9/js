import { useDispatch, useSelector } from 'react-redux';
import {
    increment,
    decrement,
    incrementByAmount
} from '../redux/conuner/counterSlice';

function Layouts() {
    const dispatch = useDispatch();
    const counterValue = useSelector(state => state.counter.value);

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncrementByAmount = amount => {
        dispatch(incrementByAmount(amount));
    };

    return (
        <div>
            <p>{counterValue}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={() => handleIncrementByAmount(5)}>
                Increment By Amount
            </button>
        </div>
    );
}

export default Layouts;
