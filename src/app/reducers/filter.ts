let defaultState = {
  func: todo => todo,
  type: 'ALL'
};

export const filter = (state: any = defaultState, action) => {
  switch(action.type) {
    case 'ALL':
      return {
        func: todo => todo,
        type: 'ALL'
      };
    case 'ACTIVE':
      return {
        func: todo => !todo.completed,
        type: 'ACTIVE'
      };
    case 'COMPLETED':
      return {
        func: todo => todo.completed,
        type: 'COMPLETED'
      };
    default:
      return state;
  }
}
