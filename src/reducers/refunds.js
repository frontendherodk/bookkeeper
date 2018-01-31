import {
  ADD_REFUND,
  UPDATE_REFUND,
  DELETE_REFUND
} from '../constants/action.types';

const refund = (state = {}, action) => {
  switch (action.type) {
    case ADD_REFUND:
      return {
        id: action.refund.id,
        user: action.refund.user,
        from: action.refund.from,
        amount: action.refund.amount,
        date: action.refund.date
      };
    default:
      return state;
  }
};

const refunds = (state = [], action) => {
  switch (action.type) {
    case ADD_REFUND:
      return [...state, refund(undefined, action)];
    case UPDATE_REFUND:
      return [...state];
    case DELETE_REFUND:
      return [...state];
    default:
      return state;
  }
};

export default refunds;
