import { ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE } from '../constants/action.types';

const expenseReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
      }
    case UPDATE_EXPENSE:
      return {
        ...state
      }
    case DELETE_EXPENSE:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default expenseReducer;