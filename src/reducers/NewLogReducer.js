import { CREATE_NEW_LOG } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case CREATE_NEW_LOG:
      return action.bool;
    default:
      return state;
  }
}