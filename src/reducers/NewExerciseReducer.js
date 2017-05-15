import {
  INPUT_EXERCISE,
  NEW_EXERCISE_SUCCEEDED,
  NEW_EXERCISE_LOADING,
  NEW_EXERCISE_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  text: '',
  exercise: {},
  loading: false,
  errorMessage: '',
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case INPUT_EXERCISE:
      return { ...state, text: action.text}
    case NEW_EXERCISE_LOADING:
      return { ...state, loading: true, errorMessage: '' }
    case NEW_EXERCISE_SUCCEEDED:
      return { ...state, loading: false, errorMessage: '', ...action.exercise, text: '' }
    case NEW_EXERCISE_FAILED:
      return { ...state, loading: false, errorMessage: action.errorMessage }
    default:
      return state;
  }
}
