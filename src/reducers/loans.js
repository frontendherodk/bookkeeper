import { ADD_LOAN, UPDATE_LOAN, DELETE_LOAN } from '../constants/action.types';

const loan = (state = {}, action) => {
  switch (action.type) {
    case ADD_LOAN:
      return {
        id: action.loan.id,
        user: action.loan.user,
        from: action.loan.from,
        amount: action.loan.amount,
        date: action.loan.date
      };
    default:
      return state;
  }
};

const loans = (state = [], action) => {
  switch (action.type) {
    case ADD_LOAN:
      return [...state, loan(undefined, action)];
    case UPDATE_LOAN:
      return [...state];
    case DELETE_LOAN:
      return [...state];
    default:
      return state;
  }
};

export default loans;
