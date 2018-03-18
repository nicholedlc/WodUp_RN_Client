import { LOGS_SUCCEEDED, LOGS_LOADING, LOGS_FAILED } from "../actions/types";

const INITIAL_STATE = {
  exercise: {},
  loading: false,
  errorMessage: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGS_FAILED:
      return { ...state, errorMessage: action.errorMessage, loading: false };
    case LOGS_LOADING:
      return { ...state, errorMessage: "", loading: true };
    case LOGS_SUCCEEDED:
      return { ...state, errorMessage: "", loading: false, ...action.logs };
    default:
      return state;
  }
};
