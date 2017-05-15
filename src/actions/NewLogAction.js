import {
  INPUT_LOG,
  PICK_IMAGE,
  NEW_LOG_SUCCEEDED,
  NEW_LOG_LOADING,
  NEW_LOG_FAILED,
  RESET_NEW_LOG_FORM
} from './types';
import RNFetchBlob from 'react-native-fetch-blob';
import { Actions } from 'react-native-router-flux';

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

function sendLog ({ id, date, rep, set, weight, note, imageUrl }) {
  return fetch(`${BASE_URL}/api/exercises/${id}/log`, {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      // 'Authorization': `JWT ${localStorage.JWT}`
    },
    method: 'POST',
    body: JSON.stringify({
      date, rep, set, weight, note, imageUrl
    })
  })
  .then(response => response.json())
}

export const createLog = ({ id, date, rep, set, weight, note, uri }) => {
  return dispatch => {
    dispatch({ type: NEW_LOG_LOADING });

    RNFetchBlob
      .fetch('POST' , `${BASE_URL}/api/uploads`, {
        // 'Authorization': `JWT ${localStorage.JWT}`,
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'multipart/form-data',
      }, [
        { name: 'image', filename: 'something.jpg', data: `RNFetchBlob-${uri}` }
      ])
      .then(response => {
        const { imageUrl } = JSON.parse(response.data);
        return sendLog({ id, date, rep, set, weight, note, imageUrl });
      })
      .then(log => dispatch(newLogSucceeded(log)))
      .then(() => Actions.showExercise())
      .then(() => dispatch({ type: RESET_NEW_LOG_FORM }))
      .catch(errorMessage => {
        console.error(errorMessage);
        return dispatch(newLogFailed(errorMessage))
      })
  }
}
