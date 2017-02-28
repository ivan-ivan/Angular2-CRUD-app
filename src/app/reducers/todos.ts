export const todos = (state: Array<any> = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ];
    case 'UPDATE_TODO':
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return Object.assign({}, todo, { text: action.payload.text});
      });
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'TOGGLE_TODO':
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
