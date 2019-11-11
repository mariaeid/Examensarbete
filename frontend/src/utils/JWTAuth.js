import axios from "axios";
const SERVER_URL = "http://127.0.0.1:8000";

const handle_login = async data => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/token-auth/`;

  try {
    let response = axios({
      method: "post",
      url: LOGIN_ENDPOINT,
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        username: data.username,
        password: data.password
      }
    });
    Promise.resolve(response).then(function(value) {
      if (value.status === 200) {
        let token = value.data.token;
        let username = value.data.user.username;
        window.localStorage.setItem("access_token", token);
        window.localStorage.setItem("username", username);
      }
    });
  } catch (e) {
    console.log("Error", e);
  }
};

const handle_signup = async data => {
  const SIGNUP_ENDPOINT = `${SERVER_URL}/core/users`;
  try {
    let response = await axios({
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
    });
    Promise.resolve(response).then(function(value) {
      if (value.status === 200) {
        window.localStorage.setItem("username", value.data.user.username);
        window.localStorage.setItem("password", value.data.user.password);
        window.localStorage.setItem("first_name", value.data.user.first_name);
        window.localStorage.setItem("last_name", value.data.user.last_name);
      }
    });
  } catch (e) {
    console.log(e);
  }
};

const handle_logout = () => {
  window.localStorage.removeItem("access_token");
  window.localStorage.removeItem("username");
};

export { handle_login, handle_signup, handle_logout };
