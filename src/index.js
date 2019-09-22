import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import product from './reducer/reducer.js';

const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.localStorage.setItem('product', serialisedState);
    } catch (err) {

    }
};

const loadState = () => {
    try {
        const serialisedState = window.localStorage.getItem('product');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

const oldState = loadState();
export const store = createStore(product, oldState);

render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
)

store.subscribe( () => {
    saveState(store.getState());
})