import { ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../constants/action.types';

const cateogry = (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        id: action.category.id,
        name: action.category.name,
        icon: action.category.icon,
        color: action.category.color,
      }
    default:
      return state
  }
}

const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        cateogry(undefined, action)
      ]
    case UPDATE_CATEGORY:
      return [
        ...state
      ]
    case DELETE_CATEGORY:
      return [
        ...state
      ]
    default:
      return state;
  }
}

export default categories;