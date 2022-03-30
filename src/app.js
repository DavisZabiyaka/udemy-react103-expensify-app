import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import getVisibleExpenses from './selectors/expenses';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
//import './playground/promises';

const store = configureStore();
/*store.dispatch(addExpense({description: 'Water Bill', note: 'Fixed', amount: 4500 }));
store.dispatch(addExpense({description: 'Gas Bill', note: 'Fixed', createdAt: 1000 }));
store.dispatch(addExpense({description: 'Rent', note: 'Fixed', amount: 288000 }));*/
/*store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000);*/

/*const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());*/

const appRoot = document.getElementById('app');
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, appRoot);