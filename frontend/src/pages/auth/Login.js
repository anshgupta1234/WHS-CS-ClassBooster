// Aryan Vora
import React, { Component } from "react";
import "../../css/style.css";


import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
 

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
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
      <section className="signupLogin-main" >
        <section>
        <nav id="signupLogin-navbar">
					<Link to="/landing" className="signupLogin-logoText">CLASSBOOSTER </Link>
          <a href="mailto:classbooster.whs@gmail.com" className="signupLogin-support">Support</a>
				</nav>
        </section> 
        <section className="signupLogin-basicBackground">
      <section  className = "loginContainer">
          <center>
            <h1 className="loginTitle"
            >LOGIN</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                className="placeHolderTextLogin"
                value={this.state.email}
                onChange={this.handleEmail}
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
              className = "signupLogin-ButtonB"
              value="Login"/>
            </form>
            <button className="signupLogin-forgotPassword">Forgot Password?</button>
            <h2 className="signupLogin-background"><span className="signupLogin-orLine">or</span></h2>


          <Link to="/Signup" className="signupLogin-ButtonC">Sign Up</Link>
          </center>
          </section>
          </section>
          
      </section>      
    );
  }
}

