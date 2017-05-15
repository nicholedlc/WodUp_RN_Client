import {
  LOGS_SUCCEEDED,
  LOGS_LOADING,
  LOGS_FAILED
} from './types';

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

export const fetchLogs = url => {
  return dispatch => {
    dispatch({ type: LOGS_LOADING });

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(logs => dispatch(logsSucceeded(logs)))
      .catch(errorMessage => {
        console.error(errorMessage);
        return dispatch(logsFailed(errorMessage))
      });
  };
};
