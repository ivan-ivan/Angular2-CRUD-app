export const filter = (state = todo => todo, action) => {
  switch(action.type) {
    case 'ALL':
      return todo => todo;
    case 'ACTIVE':
      return todo => !todo.completed;
    case 'COMPLETED':
      return todo => todo.completed;
    default:
      return state;
  }
}
