import RNFetchBlob from 'react-native-fetch-blob';

const BASE_URL = 'http://localhost:3636/api';

const Exercise = {
  getAll () {
    return (
      fetch(`${BASE_URL}/exercises`)
        .then(response => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
    );
  },

  create (name) {
    return (
      fetch(`${BASE_URL}/exercises`, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name })
      })
        .then(response => {
          if(!response.ok) throw Error(response.statusText);
          return response.json();
        })
    )
  },

  getLogs (exerciseId) {
    return (
      fetch(`${BASE_URL}/exercises/${exerciseId}`)
        .then(response => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
    );
  },

  postImage ({ exerciseId, date, rep, set, weight, note, uri }) {
    if (!uri) {
      return this.sendLog({ exerciseId, date, rep, set, weight, note });
    }
    return (
      RNFetchBlob
        .fetch('POST' , `${BASE_URL}/uploads`, {
          // 'Authorization': `JWT ${localStorage.JWT}`,
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'multipart/form-data',
        }, [
          { name: 'image', filename: 'something.jpg', data: `RNFetchBlob-${uri}` }
        ])
        .then(response => {
          const { imageUrl } = JSON.parse(response.data);
          return this.sendLog({ exerciseId, date, rep, set, weight, note, imageUrl: null });
        })
    );
  },

  sendLog ({ exerciseId, date, rep, set, weight, note, imageUrl }) {
    return (
      fetch(`${BASE_URL}/exercises/${exerciseId}/log`, {
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
        .then(response => {
          return response.json();
        })
    );
  }
};

export { Exercise };
