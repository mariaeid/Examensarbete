import axios from "axios";
const SERVER_URL = "http://127.0.0.1:8000";

const handle_login = async (e, data) => {
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
        // Request success
        let token = value.data.token;
        let username = value.data.user.username;
        localStorage.setItem("access_token", token);
        localStorage.setItem("username", username);
      }
    });
  } catch (e) {
    console.log("Error", e);
  }
};

const handle_signup = async data => {
  const SIGNUP_ENDPOINT = `${SERVER_URL}/core/users/`;

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
      console.log("Response", response);
      console.log("PROMISES RESOLVE", value);
      if (value.status === 201) {
        // Resource created success
        localStorage.setItem("username", value.data.username);
        localStorage.setItem("password", value.data.password);
        localStorage.setItem("first_name", value.data.first_name);
        localStorage.setItem("last_name", value.data.last_name);
      }
    });
  } catch (e) {
    console.log(e);
  }
};

const handle_logout = () => {
  localStorage.clear();
};

export { handle_login, handle_signup, handle_logout };
