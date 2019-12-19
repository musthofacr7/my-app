import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import Axios from "axios";

function Login(props) {
  const HandleLogin = event => {
    let txtUsername = document.getElementById("username").value;
    let txtPassword = document.getElementById("password").value;
    // alert(txtUsername);
    let data = {
      email: txtUsername,
      password: txtPassword
    };
    // console.log(data);
    Axios.post("https://api-arus.herokuapp.com/api/login", {
      email: txtUsername,
      password: txtPassword
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    event.preventDefault();
  };

  return (
    <div>
      <h1>Form Halaman Login</h1>
      <form action="">
        <div>
          {/* <TextField id="standard-basic" label="User Name" /> */}
          <label>User Name</label>
          <input id="username" type="text" />
        </div>
        <div>
          {/* <TextField id="standard-basic" label="Password" type="password" /> */}
          <label>Password</label>
          <input id="password" type="password" />
        </div>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={HandleLogin}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default withRouter(Login);
