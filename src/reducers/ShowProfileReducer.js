import {
  PROFILE_SUCCEEDED,
  PROFILE_LOADING,
  PROFILE_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  profile: {},
  loading: false,
  errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_SUCCEEDED:
      return { ...state, errorMessage: '', ...action.profile, loading: false };
    case PROFILE_LOADING:
      return { ...state, errorMessage: '', loading: true };
    case PROFILE_FAILED:
      return { ...state, errorMessage: action.errorMessage, loading: false };
    default:
      return state;
  }
}
