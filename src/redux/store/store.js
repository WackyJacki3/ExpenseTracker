import { legacy_createStore as createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenseReducer';

const store = createStore(expenseReducer);

export default store;

