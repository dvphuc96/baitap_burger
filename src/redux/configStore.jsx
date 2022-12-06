import {configureStore} from '@reduxjs/toolkit';
import { burgerReducer } from './reducers/burgerReducer';

export const store = configureStore({
    reducer: {
        burgerReducer: burgerReducer,
    }
})