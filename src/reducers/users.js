import { ADD_USER, UPDATE_USER, DELETE_USER } from '../constants/action.types';

const user = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        id: action.user.id,
        name: action.user.name,
        icon: action.user.icon,
        color: action.user.color,
      }
    default:
      return state
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        user(undefined, action)
      ]
    case UPDATE_USER:
      return [
        ...state
      ]
    case DELETE_USER:
      return [
        ...state
      ]
    default:
      return state;
  }
}

export default users;