import {ADD_EXPENSE, ADD_CATEGORY, ADD_LOAN, ADD_REFUND} from '../constants/action.types';

export const addExpense = (expense) => {
  return {
    type: ADD_EXPENSE,
    expense
  }
}

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    category
  }
}

export const addLoan = (loan) => {
  return {
    type: ADD_LOAN,
    loan
  }
}

export const addRefund = (refund) => {
  return {
    type: ADD_REFUND,
    refund
  }
}