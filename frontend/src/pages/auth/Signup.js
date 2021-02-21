// Aryan Vora
import React, { Component } from "react";
import "../../css/style.css";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default class Signup extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    ConfirmPassword: "",
    errorInput: undefined,
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
    if(this.state.email == ""){
      this.setState({errorInput: true });
    }
    else if(this.state.password == ""){
      this.setState({errorInput: true });
    }
    else if(this.state.username == ""){
      this.setState({errorInput: true });
    }
    else if(this.state.ConfirmPassword == ""){
      this.setState({errorInput: true });
    }
    else {
      this.setState({errorInput: false });
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
                {this.state.errorInput ? (<form onSubmit={this.handleSubmit}>
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
                  <br /><p className="signupLogin-errorMessage">Some fields are missing</p>
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







