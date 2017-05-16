import {
  LOGS_SUCCEEDED,
  LOGS_LOADING,
  LOGS_FAILED
} from './types';
import { Exercise } from '../fetches';

const logsSucceeded = logs => {
  return {
    type: LOGS_SUCCEEDED,
    logs
  }
}

const logsFailed = errorMessage => {
  return {
    type: LOGS_FAILED,
    errorMessage
  }
}

export const getLogs = exerciseId => {
  return dispatch => {
    dispatch({ type: LOGS_LOADING });
    return Exercise.getLogs(exerciseId)
      .then(logs => dispatch(logsSucceeded(logs)))
      .catch(errorMessage => {
        console.error(errorMessage);
        return dispatch(logsFailed(errorMessage))
      });
  };
};
