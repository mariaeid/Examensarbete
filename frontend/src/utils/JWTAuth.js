import axios from "axios";
const SERVER_URL = "http://127.0.0.1:8000";

const handle_login = data => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/token-auth/`;

  axios({
    method: "post",
    url: LOGIN_ENDPOINT,
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      username: data.username,
      password: data.password
    }
  })
    .then(response => {
      if (response.status === 200) {
        console.log("Res", response);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.user.username);
        localStorage.setItem("firstName", response.data.user.first_name);
        localStorage.setItem("lastName", response.data.user.last_name);
      }
    })
    .catch(e => {
      console.log(e.response);
    });
};

// const LOGIN_ENDPOINT = `${SERVER_URL}/token-auth/`;
//
// try {
//   let response = axios({
//     method: "post",
//     url: LOGIN_ENDPOINT,
//     headers: {
//       "Content-Type": "application/json"
//     },
//     data: {
//       username: data.username,
//       password: data.password
//     }
//   });
//   Promise.resolve(response).then(function(value) {
//     if (value.status === 200) {
//       // Request success
//       let token = value.data.token;
//       let username = value.data.user.username;
//       localStorage.setItem("access_token", token);
//       localStorage.setItem("username", username);
//     }
//   });
// } catch (e) {
//   console.log("Error", e);
// }

const handle_signup = async data => {
  const SIGNUP_ENDPOINT = `${SERVER_URL}/core/users/`;

  axios({
    method: "post",
    url: SIGNUP_ENDPOINT,
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      username: data.username,
      password: data.password,
      first_name: data.first_name,
      last_name: data.last_name
    }
  })
    .then(response => {
      if (response.status === 201) {
        console.log("Mitt signup response", response);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("password", response.data.password);
        localStorage.setItem("first_name", response.data.first_name);
        localStorage.setItem("last_name", response.data.last_name);
      }
    })
    .catch(error => {
      console.log(error.responseta);
    });
};
// try {
//   let response = await axios({
//     method: "post",
//     url: SIGNUP_ENDPOINT,
//     headers: {
//       "Content-Type": "application/json"
//     },
//     data: {
//       username: data.username,
//       password: data.password,
//       first_name: data.first_name,
//       last_name: data.last_name
//     }
//   });
//   Promise.resolve(response).then(function(value) {
//     if (value.status === 201) {
//       // Resource created success
//       localStorage.setItem("username", value.data.username);
//       localStorage.setItem("password", value.data.password);
//       localStorage.setItem("first_name", value.data.first_name);
//       localStorage.setItem("last_name", value.data.last_name);
//     }
//   });
// } catch (e) {
//   console.log(e);
// }

const handle_logout = () => {
  localStorage.clear();
};

export { handle_login, handle_signup, handle_logout };
