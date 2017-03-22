import * as constants from '../constants';

const defaultState = {
  func: todo => todo,
  type: constants.ALL
};

export const filter = (state: any = defaultState, action) => {
  switch (action.type) {
    case constants.ALL:
      return {
        func: todo => todo,
        type: constants.ALL
      };
    case constants.ACTIVE:
      return {
        func: todo => !todo.completed,
        type: constants.ACTIVE
      };
    case constants.COMPLETED:
      return {
        func: todo => todo.completed,
        type: constants.COMPLETED
      };
    default:
      return state;
  }
}
