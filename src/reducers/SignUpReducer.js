import {
  INPUT_USER,
  SIGNUP_LOADING,
  SIGNUP_SUCCEEDED,
  RESET_SIGNUP_FORM
} from "../actions/types";

const INITIAL_STATE = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  passwordConfirmation: null,
  loading: false,
  errorMessage: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_USER:
      return { ...state, [action.payload.key]: action.payload.val };
    case SIGNUP_LOADING:
      return { ...state, loading: true, errorMessage: "" };
    case SIGNUP_SUCCEEDED:
      return { ...state, loading: false, errorMessage: "", ...action.user };
    case RESET_SIGNUP_FORM:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
