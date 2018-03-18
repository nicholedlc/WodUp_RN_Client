import { AsyncStorage } from "react-native";
import RNFetchBlob from "react-native-fetch-blob";

// const BASE_URL = "https://wodup-express.herokuapp.com/api";
const BASE_URL = "http://localhost:4545/api";

const Exercise = {
  getAll() {
    return fetch(`${BASE_URL}/exercises`).then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    });
  },

  create(name) {
    return fetch(`${BASE_URL}/exercises`, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ name })
    }).then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    });
  },

  getLogs(exerciseId) {
    return fetch(`${BASE_URL}/exercises/${exerciseId}`).then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    });
  },

  postImage({ exerciseId, date, rep, set, weight, note, uri }) {
    if (!uri) {
      return this.sendLog({
        exerciseId,
        date,
        rep,
        set,
        weight,
        note,
        imageUrl: null
      });
    }
    return RNFetchBlob.fetch(
      "POST",
      `${BASE_URL}/uploads`,
      {
        // 'Authorization': `JWT ${localStorage.JWT}`,
        Accept: "application/json, text/plain, */*",
        "Content-Type": "multipart/form-data"
      },
      [{ name: "image", filename: "something.jpg", data: `RNFetchBlob-${uri}` }]
    ).then(response => {
      const { imageUrl } = JSON.parse(response.data);
      return this.sendLog({
        exerciseId,
        date,
        rep,
        set,
        weight,
        note,
        imageUrl
      });
    });
  },

  sendLog({ exerciseId, date, rep, set, weight, note, imageUrl }) {
    return fetch(`${BASE_URL}/exercises/${exerciseId}/log`, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
        // 'Authorization': `JWT ${localStorage.JWT}`
      },
      method: "POST",
      body: JSON.stringify({
        date,
        rep,
        set,
        weight,
        note,
        imageUrl
      })
    }).then(response => {
      return response.json();
    });
  }
};

const User = {
  createOne({ signUp }) {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation
    } = signUp;
    return fetch(`${BASE_URL}/auth/signup`, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        passwordConfirmation
      })
    }).then(response => {
      if (!response.ok) throw Error(response.status);
      return response.json();
    });
  },

  authorize({ email, password }) {
    return fetch(`${BASE_URL}/auth/login`, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(response => {
        if (!response.ok) throw Error(response.status);
        return response.json();
      })
      .catch(console.error);
  },

  // export const submitLogIn = ({ email, password }) => {
  //   return async dispatch => {
  //     try {
  //       dispatch({ type: LOGIN_LOADING });
  //       const json = await User.authorize({ email, password });
  //       await AS.setItem('JWT', json.token);
  //       dispatch(logInSucceeded({ user: json.user }));
  //       Actions.showProfile();
  //       dispatch(resetLogInForm());
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }

  getProfile() {
    return AsyncStorage.getItem("JWT", (error, token) => token)
      .then(token => {
        return fetch(`${BASE_URL}/profile`, {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`
          },
          method: "GET"
        });
      })
      .then(response => {
        if (!response.ok) throw Error(response.status);
        return response.json();
      });
  }
};

export { Exercise, User };
