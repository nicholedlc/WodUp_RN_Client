import {
  PROFILE_SUCCEEDED,
  PROFILE_LOADING,
  PROFILE_FAILED
} from './types';
import { User } from '../fetches';

const profileSucceeded = profile => {
  return {
    type: PROFILE_SUCCEEDED,
    profile
  }
}

const profileFailed = errorMessage => {
  return {
    type: PROFILE_FAILED,
    errorMessage
  }
}

export const showProfileInfo = ()=> {
  return dispatch => {
    dispatch({ type: PROFILE_LOADING });
    return (
      User.getProfile()

    );
  }
}
