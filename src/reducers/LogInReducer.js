import { INPUT_LOGIN, RESET_LOGIN_FORM, LOGIN_SUCCEEDED, LOGIN_LOADING } from '../actions/types';

const INITIAL_STATE = {
  email: null,
  password: null,
  user: {},
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_LOGIN:
      return { ...state, [action.payload.key]: action.payload.value }
    case RESET_LOGIN_FORM:
      return { ...state, email: null, password: null }
    case LOGIN_SUCCEEDED:
      return { ...state, ...action.user, loading: false }
    case LOGIN_LOADING:
      return { ...state, loading: true }
    default:
      return state
  };
};
