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
    errorInput: undefined,
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
    
  };

  handleSubmit = (event) => {
    if(this.state.email == ""){
      this.setState({errorInput: true });
    }
    else if(this.state.password == ""){
      this.setState({errorInput: true });
    }
    else {
      this.setState({errorInput: false });
    }
    event.preventDefault();
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
              {
              this.state.errorInput ? ( 
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Email"
                  className="login-placeHolderTextError"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
                <br />
                <input
                  type="text"
                  placeholder="Password"
                  className="login-placeHolderTextError"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
                <br/><p className="signupLogin-errorMessage">Some fields are missing</p>
                <input type="submit"  
                className = "signupLogin-ButtonB"
                onClick  = {this.handleSubmit}
                value="Login"/>
              </form>
              
              
              ) 
              : ( 
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
                onClick  = {this.handleSubmit}
                value="Login"/>
              </form>)
            }
           
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

