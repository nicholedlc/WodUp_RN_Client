import { AsyncStorage as AS } from "react-native";
import { Actions } from "react-native-router-flux";
import {
  INPUT_LOGIN,
  RESET_LOGIN_FORM,
  SUBMIT_LOGIN,
  LOGIN_LOADING,
  LOGIN_SUCCEEDED
} from "./types";
import { User } from "../fetches";

export const inputLogIn = ({ key, value }) => {
  return {
    type: INPUT_LOGIN,
    payload: { key, value }
  };
};

export const resetLogInForm = () => {
  return { type: RESET_LOGIN_FORM };
};

const logInSucceeded = user => {
  return {
    type: LOGIN_SUCCEEDED,
    user
  };
};

export const submitLogIn = ({ email, password }) => {
  return async dispatch => {
    try {
      dispatch({ type: LOGIN_LOADING });
      const json = await User.authorize({ email, password });
      await AS.setItem("JWT", json.token);
      dispatch(logInSucceeded({ user: json.user }));
      Actions.userProfile();
      dispatch(resetLogInForm());
    } catch (error) {
      console.log(error);
    }
  };
};

// export const submitLogIn = ({ email, password }) => {
//   return dispatch => {
//     dispatch({ type: LOGIN_LOADING });
//     return (
//       User.authorize({ email, password })
//         .then(json => {
//           AS.setItem('JWT', json.token,  () => {
//             return dispatch(logInSucceeded({ user: json.user }));
//           })
//         })
//         .then(() => Actions.showProfile())
//         .then(() => dispatch(resetLogInForm()))
//         .catch(e => {
//           console.error(e);
//           // return dispatch(logInFailed(errorMessage))
//         })
//     );
//   }
// }
