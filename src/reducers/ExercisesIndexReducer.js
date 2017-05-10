import {
  EXERCISES_SUCCEEDED,
  EXERCISES_LOADING,
  EXERCISES_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  exercises: [],
  loading: false,
  errored: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EXERCISES_FAILED:
      return { ...state, errorred: action.errored, loading: false };
    case EXERCISES_LOADING:
      return { ...state, errored: '', loading: true };
    case EXERCISES_SUCCEEDED:
      return { ...state, errored: '', loading: false, exercises: action.exercises };
    default:
      return state;
  }
}
