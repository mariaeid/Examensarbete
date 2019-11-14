import React, { Component } from "react";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";

import LoginSignUp from "../LoginSignUp";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: "",
      username: "",
      password: "",
      first_name: "",
      last_name: ""
    };
  }

  updateStates = () => {
    this.setState({ username: localStorage.getItem("username") });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    console.log("lokalbutiken", localStorage.getItem("username"));

    if (localStorage.getItem("access_token")) {
      return <Redirect to="/user" />;
    }

    if (localStorage.getItem("username")) {
      return <Redirect to="/user" />;
    }
    let form;
    switch (this.state.displayed_form) {
      case "login":
        form = <LoginForm />;
        break;
      case "signup":
        form = <SignupForm />;
        break;
      default:
        form = null;
    }

    return (
      <div>
        <LoginSignUp display_form={this.display_form} />
        {form}
      </div>
    );
  }
}

export default withRouter(Auth);

// componentDidMount() {
//   if (this.state.logged_in) {
//     fetch("http://localhost:8000/core/current_user/", {
//       headers: {
//         Authorization: `JWT ${localStorage.getItem("token")}`
//       }
//     })
//       .then(res => res.json())
//       .then(json => {
//         this.setState({ username: json.username });
//       });
//   }
// }

// async handle_login(e, data) {
//   console.log("Först:", this.state.logged_in);
//   e.preventDefault();
//   let info = {
//     username: data.username,
//     password: data.password
//   };
//   console.log("Inloggad!", info);
//
//   await handle_login(info);
//   let hej = window.localStorage.getItem("logged_in");
//   var da = localStorage.getItem("logged_in");
//   var sa = localStorage["logged_in"];
//   // console.log(
//   //   JSON.parse(window.localStorage.getItem("logged_in"))[0].logged_in
//   // );
//   // console.log(
//   //   "TEST",
//   //   JSON.parse(localStorage.getItem("logged_in"))[0].logged_in
//   // );
//   console.log("hej", hej);
//   console.log("da", da);
//   console.log("sa", sa);
//   console.log("Say wewaea", localStorage);
//   console.log("Say whhaaat", localStorage);
//
//   this.setState({
//     logged_in: window.localStorage.getItem("logged_in") ? true : false
//   });
//   console.log("Efter", this.state.logged_in);
// }

// handle_login = (e, data) => {
//   e.preventDefault();
//   console.log("Login data", data);
//   axios({
//     method: "post",
//     url: base_url + "/token-auth/",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     data: {
//       username: data.username,
//       password: data.password
//     }
//   })
//     .then(response => {
//       console.log("Res", response);
//       localStorage.setItem("token", response.data.token);
//       this.setState({
//         logged_in: true,
//         displayed_form: "",
//         username: response.data.user.username
//       });
//     })
//     .catch(error => {
//       console.log(error.responseta);
//     });
// };
//
// handle_signup = (e, data) => {
//   e.preventDefault();
//   axios({
//     method: "post",
//     url: base_url + "/core/users/",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     data: {
//       username: data.username,
//       password: data.password,
//       first_name: data.first_name,
//       last_name: data.last_name
//     }
//   })
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//       console.log(error.responseta);
//     });
// };
//
