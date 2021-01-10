// Aryan Vora
import React, { Component } from "react";
import "../../css/style.css";

export default class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    ConfirmPassword: "",
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
    
    event.preventDefault();
  };
  render() {
    return (
      <div className="main">
        <div>
        <nav id="navbarB">
					<span className="logoText2">CLASSBOOSTER </span>
					<button className="support">Support</button>
          <button className="updates">Updates</button>
          <button className="signInButton">SIGN UP</button>
				</nav>
        </div>   

        <div className="basicBackground">


      <div  className = "signupContainer">
      <div>
          <center>
            <h1 className="loginTitle"
            >Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
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
              className = "signInButtonB"
              value="Sign-in"/>
              
            </form>
            <button className="forgotPassword">
                Forgot Password?
            </button>
            
            <h6 style={{
                 textAlign: "center",
                 borderBottom: "0.5px solid #000000",
                 lineHeight: "1px",
                 margin: "20px",
                 width: "78%"

            }}><span style={{
            padding: "0 10px",
            background:"#fff",
            fontFamily: "Roboto Condensed",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "12px",
            textAlign: "center",
            }}>or</span></h6>

            <button className="signUpButtonB" 
              > Signup</button>
          </center>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
