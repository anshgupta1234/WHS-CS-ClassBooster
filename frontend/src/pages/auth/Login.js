// Aryan Vora
import React, { Component } from "react";
import "../../css/style.css";


import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
 

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  
  handleSignUp = () => {
     
  };


  render() {
    return (
      <section className="main" >
        <section>
        <nav id="navbarB">
					<span className="logoText2">CLASSBOOSTER </span>
					<button className="support ">Support</button>
          <button className="updates ">Updates</button>
          <Link to="/Signup" className="loginSignupButton" >SIGN UP</Link>
				</nav>
        </section> 
        <section className="basicBackground">
      <section  className = "loginContainer">
          <center>
            <h1 className="loginTitle"
            >LOGIN</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                className="placeHolderTextLogin"
                value={this.state.username}
                onChange={this.handleUsername}
              />
              <br />
              <input
                type="text"
                placeholder="Password"
                className="placeHolderTextLogin"
                value={this.state.password}
                onChange={this.handlePassword}
              />
              <br/>
              <input type="submit"  
              className = "signInButtonB"
              value="Login"/>
            </form>
            <button className="forgotPassword">Forgot Password?</button>
            
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

          <Link to="/Signup" className="signUpLoginButtonB">Sign Up</Link>
          </center>
          </section>
          </section>
          
      </section>      
    );
  }
}

