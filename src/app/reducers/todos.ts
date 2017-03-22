import * as constants from '../constants';

export const todos = (state: Array<any> = [], action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return [
        ...state,
        action.payload
      ];
    case constants.UPDATE_TODO:
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return Object.assign({}, todo, { text: action.payload.text});
      });
    case constants.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case constants.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return Object.assign({}, todo, { completed: action.payload.completed});
      });
    default:
      return state;
  }
}
