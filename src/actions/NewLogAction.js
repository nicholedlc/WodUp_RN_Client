import {
  INPUT_LOG,
  PICK_IMAGE,
  NEW_LOG_SUCCEEDED,
  NEW_LOG_LOADING,
  NEW_LOG_FAILED,
  RESET_NEW_LOG_FORM
} from './types';
import { Actions } from 'react-native-router-flux';
import { Exercise } from '../fetches';

const BASE_URL = 'http://localhost:3636';

const newLogSucceeded = log => {
  return {
    type: NEW_LOG_SUCCEEDED,
    log
  };
}

const newLogFailed = errorMessage => {
  return {
    type: NEW_LOG_FAILED,
    errorMessage
  }
}

export const inputLog = ({ key, val }) => {
  return {
    type: INPUT_LOG,
    payload: { key, val }
  }
}

export const pickImage = uri => {
  return {
    type: PICK_IMAGE,
    uri
  }
}

export const createLog = ({ exerciseId, date, rep, set, weight, note, uri }) => {
  return dispatch => {
    dispatch({ type: NEW_LOG_LOADING });
    return Exercise.postImage({ exerciseId, date, rep, set, weight, note, uri })
      .then(log => dispatch(newLogSucceeded(log)))
      .then(() => Actions.showExercise())
      .then(() => dispatch({ type: RESET_NEW_LOG_FORM }))
      .catch(errorMessage => {
        console.error(errorMessage);
        return dispatch(newLogFailed(errorMessage))
      })
  }
}
