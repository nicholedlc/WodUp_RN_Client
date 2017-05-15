import { SHOW_LOG_INFO } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SHOW_LOG_INFO:
      return action.id;
    default:
      return state;
  }
}
