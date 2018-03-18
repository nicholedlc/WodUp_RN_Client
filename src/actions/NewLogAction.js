import {
  OPEN_MODAL,
  INPUT_LOG,
  PICK_IMAGE,
  NEW_LOG_SUCCEEDED,
  NEW_LOG_LOADING,
  NEW_LOG_FAILED,
  RESET_NEW_LOG_FORM
} from "./types";
import { Actions, ActionConst } from "react-native-router-flux";
import { Exercise } from "../fetches";

const newLogSucceeded = log => {
  return {
    type: NEW_LOG_SUCCEEDED,
    log
  };
};

const newLogFailed = errorMessage => {
  return {
    type: NEW_LOG_FAILED,
    errorMessage
  };
};

export const openModal = bool => {
  return {
    type: OPEN_MODAL,
    bool
  };
};

export const inputLog = ({ key, val }) => {
  return {
    type: INPUT_LOG,
    payload: { key, val }
  };
};

export const pickImage = uri => {
  return {
    type: PICK_IMAGE,
    uri
  };
};

export const resetNewLogForm = () => {
  return {
    type: RESET_NEW_LOG_FORM
  };
};

export const createLog = ({
  exerciseId,
  date,
  rep,
  set,
  weight,
  note,
  uri
}) => {
  return dispatch => {
    dispatch({ type: NEW_LOG_LOADING });
    return Exercise.postImage({ exerciseId, date, rep, set, weight, note, uri })
      .then(log => dispatch(newLogSucceeded(log)))
      .then(() => dispatch(resetNewLogForm()))
      .then(() => Actions.showExercise({ type: ActionConst.RESET }))
      .catch(errorMessage => {
        console.error(errorMessage);
        return dispatch(newLogFailed(errorMessage));
      });
  };
};
