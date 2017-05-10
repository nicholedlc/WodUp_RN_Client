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
    errored: errorMessage
  }
}

export const fetchLogs = url => {
  console.log(url); // http://localhost:3636/api/exercises/:id
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
      .then(log => dispatch(logsSucceeded(log)))
      .catch(errorMessage => {
        console.info(errorMessage);
        return dispatch(logsFailed(errorMessage))
      });
  };
};
