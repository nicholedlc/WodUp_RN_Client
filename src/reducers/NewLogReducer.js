import { INPUT_LOG } from '../actions/types';

const INITIAL_STATE = {
  date: new Date(),
  rep: null,
  set: null,
  weight: null,
  note: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_LOG:
      console.log(action.payload.key, action.payload.val)
      return { ...state, [action.payload.key]: action.payload.val };
    default:
      return state;
  }
}
