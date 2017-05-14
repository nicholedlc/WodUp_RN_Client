import { INPUT_LOG, PICK_IMAGE } from '../actions/types';

const INITIAL_STATE = {
  date: new Date(),
  rep: null,
  set: null,
  weight: null,
  note: null,
  imageUri: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_LOG:
      return { ...state, [action.payload.key]: action.payload.val };
    case PICK_IMAGE:
      console.log(action.type, action.image);
      return { ...state, uri: action.uri };
    default:
      return state;
  }
}
