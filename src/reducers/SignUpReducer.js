import { INPUT_USER } from '../actions/types';

const INITIAL_STATE = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  passwordConfirmation: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_USER:
      return { ...state, [action.payload.key]: action.payload.val };
    default:
      return state;
  }
};
