import { SELECT_EXERCISE } from '../actions/types';

export const exerciseId = (state = null, action) => {
  if(action.type === 'SELECT_EXERCISE') console.log(action.exerciseId);
  switch(action.type) {
    case SELECT_EXERCISE:
      return action.exerciseId;
    default:
      return state;
  }
}
