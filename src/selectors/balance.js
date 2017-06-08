import {
  createSelector
} from 'reselect';
import {
  users
} from '../constants/users';

const expenseItemsSelector = state => state.expenses;

export default createSelector(expenseItemsSelector, expenses => {
  const userTotalExpenses = expenses.reduce((acc, val, index) => {
    if (val.paidBy === users[0].id) {
      return parseInt(val.amount, 10) + acc;
    }
    return acc;
  }, 0);

  const othersTotalExpenses = expenses.reduce((acc, val, index) => {
    if (val.paidBy !== users[0].id) {
      return parseInt(val.amount, 10) + acc;
    }
    return 0;
  }, 0);

  return (userTotalExpenses - othersTotalExpenses) / 2;
});