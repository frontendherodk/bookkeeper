import { ADD_PAYBACK, UPDATE_PAYBACK, DELETE_PAYBACK } from '../constants/action.types';

const paybackReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PAYBACK:
      return {
        ...state,
      }
    case UPDATE_PAYBACK:
      return {
        ...state
      }
    case DELETE_PAYBACK:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default paybackReducer;