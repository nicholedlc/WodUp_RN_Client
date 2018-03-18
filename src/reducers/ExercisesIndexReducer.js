import {
  EXERCISES_SUCCEEDED,
  EXERCISES_LOADING,
  EXERCISES_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  exercises: [],
  loading: false,
  errorMessage: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXERCISES_FAILED:
      return { ...state, errorMessage: action.errorMessage, loading: false };
    case EXERCISES_LOADING:
      return { ...state, errorMessage: "", loading: true };
    case EXERCISES_SUCCEEDED:
      return {
        ...state,
        errorMessage: "",
        loading: false,
        exercises: action.exercises
      };
    default:
      return state;
  }
};
