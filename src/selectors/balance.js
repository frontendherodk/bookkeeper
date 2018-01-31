import { createSelector } from 'reselect';
import { users } from '../constants/users';

const expenseItemsSelector = state => state.expenses;
const loanItemsSelector = state => state.loans;
const refundItemsSelector = state => state.refunds;

export default createSelector(
  expenseItemsSelector,
  loanItemsSelector,
  refundItemsSelector,
  (expenses, loans, refunds) => {

    // Expenses
    const userTotalExpenses = expenses.reduce((acc, val, index) => {
      if (val.paidBy === users[0].id) {
        return parseFloat(val.amount) + acc;
      }
      return acc;
    }, 0);

    const othersTotalExpenses = expenses.reduce((acc, val, index) => {
      if (val.paidBy !== users[0].id) {
        return parseFloat(val.amount) + acc;
      }
      return acc;
    }, 0);

    // Loans
    const userTotalLoans = loans.reduce((acc, val, index) => {
      if (val.user === users[0].id) {
        return parseFloat(val.amount) + acc;
      }
      return acc;
    }, 0);
    
    const otherTotalLoans = loans.reduce((acc, val, index) => {
      if (val.user !== users[0].id) {
        return parseFloat(val.amount) + acc;
      }
      return acc;
    }, 0);

    // Refunds
    const userTotalRefunds = refunds.reduce((acc, val, index) => {
      if (val.user === users[0].id) {
        return parseFloat(val.amount) + acc;
      }
      return acc;
    }, 0);
    
    const otherTotalRefunds = refunds.reduce((acc, val, index) => {
      if (val.user !== users[0].id) {
        return parseFloat(val.amount) + acc;
      }
      return acc;
    }, 0);

    return Number(((userTotalExpenses - othersTotalExpenses) / 2) + (otherTotalLoans - userTotalLoans) - (otherTotalRefunds - userTotalRefunds)).toFixed(2);
  }
);