import { combineReducers } from 'redux';
import expenses from './expenses';
import refunds from './refunds';
import categories from './categories';
import users from './users';
import loans from './loans';

const reducers = combineReducers({
  expenses,
  refunds,
  categories,
  users,
  loans
});

export default reducers;
