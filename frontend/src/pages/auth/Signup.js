// Aryan Vora
import React, { Component } from "react";
import "../../css/style.css";
import {Link} from "react-router-dom";
import history from '../../history';
import ConfirmEmail from "./ConfirmEmail";

export default class Signup extends React.Component {

  state = {
    email: "",
    username: "",
    password: "",
    ConfirmPassword: "",
    errorInput: undefined,
    errorMsg: undefined
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleConfirmPassword = (event) => {
    this.setState({ ConfirmPassword: event.target.value });
  };

  handleSubmit = (event) => {

    if(this.state.email === ""|| this.state.password === ""|| this.state.username === ""|| this.state.ConfirmPassword === ""){
      this.setState({errorInput: true });
    }
    else {
      this.setState({errorInput: false });
      fetch('https://4dd9e76c2a29.ngrok.io/signup', {
        method: 'POST',
        header: 'Access-Control-Allow-Origin',
        body: JSON.stringify({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        })
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        if(res.success) {
          history.push('/confirmEmail');
          console.log("success");
        } else {
          this.setState({ errorMsg: JSON.stringify(res.error) });
          this.setState({errorInput: true });
          console.log(JSON.stringify(res.error));

        }
    }
  )
}
event.preventDefault();

};
  render() {

    return (
      <div className="signupLogin-main">
        <div>
          <nav id="signupLogin-navbar">
            <Link to="/landing" className="signupLogin-logoText">CLASSBOOSTER </Link>
            <a href="mailto:classbooster.whs@gmail.com" className="signupLogin-support">Support</a>
          </nav>
        </div>

        <div className="signupLogin-basicBackground">


          <div className="signupContainer">
            <div>
              <center>
                <h1 className="loginTitle"
                >Sign Up</h1>
                {this.state.errorInput || this.state.errorMsg !== undefined ? (<form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Email"
                    className="signup-placeHolderTextError"
                    value={this.state.email}
                    onChange={this.handleEmail}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Username"
                    className="signup-placeHolderTextError"
                    value={this.state.username}
                    onChange={this.handleUsername}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Password"
                    className="signup-placeHolderTextError"
                    value={this.state.password}
                    onChange={this.handlePassword}
                  />

                  <input
                    type="text"
                    placeholder="Confirm Password"
                    className="signup-placeHolderTextError"
                    value={this.state.ConfirmPassword}
                    onChange={this.handleConfirmPassword}
                  />
                  <br /><p className="signupLogin-errorMessage">Some fields are missing or incorrect <br></br>{this.state.errorMsg}</p>
                  <input type="submit"
                    className="signupLogin-ButtonB"
                    value="Sign Up" />

                </form>) : (<form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Email"
                    className="placeHolderTextSignup"
                    value={this.state.email}
                    onChange={this.handleEmail}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Username"
                    className="placeHolderTextSignup"
                    value={this.state.username}
                    onChange={this.handleUsername}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Password"
                    className="placeHolderTextSignup"
                    value={this.state.password}
                    onChange={this.handlePassword}
                  />

                  <input
                    type="text"
                    placeholder="Confirm Password"
                    className="placeHolderTextSignup"
                    value={this.state.ConfirmPassword}
                    onChange={this.handleConfirmPassword}
                  />
                  <br />
                  <input type="submit"
                    className="signupLogin-ButtonB"
                    value="Sign Up" />

                </form>)}
                
                <button className="signupLogin-forgotPassword">
                  Forgot Password?
            </button>

                <h2 class="signupLogin-background"><span className="signupLogin-orLine">or</span></h2>

                <Link to="/Login" className="signupLogin-ButtonC">Login</Link>

              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

