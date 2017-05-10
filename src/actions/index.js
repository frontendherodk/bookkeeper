import {ADD_EXPENSE, ADD_CATEGORY} from '../constants/action.types';

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