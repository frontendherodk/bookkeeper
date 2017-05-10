import { combineReducers } from 'redux';
import expenses from './expenses';
import refunds from './refunds';
import categories from './categories';
import users from './users';

const reducers = combineReducers({
  expenses,
  refunds,
  categories,
  users
});

export default reducers;
