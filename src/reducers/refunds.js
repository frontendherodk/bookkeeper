import { ADD_REFUND, UPDATE_REFUND, DELETE_REFUND } from '../constants/action.types';

const refunds = (state = {}, action) => {
  switch (action.type) {
    case ADD_REFUND:
      return [
        ...state,
      ]
    case UPDATE_REFUND:
      return [
        ...state
      ]
    case DELETE_REFUND:
      return [
        ...state
      ]
    default:
      return state;
  }
}

export default refunds;