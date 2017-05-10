import { ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE } from '../constants/action.types';

const expense = (state = {}, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        id: action.expense.id,
        date: action.expense.date,
        title: action.expense.title,
        note: action.expense.note,
        amount: action.expense.amount,
        category: action.expense.category,
        paidBy: action.expense.paidBy
      }
    default:
      return state
  }
}



const expenses = (state = [], action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
        expense(undefined, action)
      ]
    case UPDATE_EXPENSE:
      return [
        ...state
      ]
    case DELETE_EXPENSE:
      return [
        ...state
      ]
    default:
      return state;
  }
}

export default expenses;