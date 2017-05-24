import { INPUT_LOGIN, RESET_LOGIN_FORM, LOGIN_SUCCEEDED } from '../actions/types';

const INITIAL_STATE = {
  email: null,
  password: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_LOGIN:
      return { ...state, [action.payload.key]: action.payload.value }
    case RESET_LOGIN_FORM:
      return { ...state, ...INITIAL_STATE }
    case LOGIN_SUCCEEDED:
      console.log(action.token)
    default:
      return state
  };
};
