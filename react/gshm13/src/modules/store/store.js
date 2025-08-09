import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/conuner/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;
