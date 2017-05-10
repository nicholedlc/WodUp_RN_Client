import {
  LOGS_SUCCEEDED,
  LOGS_LOADING,
  LOGS_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  exercise: {},
  loading: false,
  errored: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGS_FAILED:
      return { ... state, errored: action.errored, loading: false };
    case LOGS_LOADING:
      return { ...state, errored: '', loading: true };
    case LOGS_SUCCEEDED:
      return { ...state, errored: '', loading: false, ...action.logs };
    default:
      return state;
  };
}
