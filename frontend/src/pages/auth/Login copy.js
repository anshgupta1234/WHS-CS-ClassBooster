// Aryan Vora
import React, { Component } from "react";
import "../../css/style.css";


import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
 

export default class LoginCopy extends React.Component {

  state = {
    username: "",
    password: "",
    error: undefined,
    isLoaded: false,
    classrooms: []
  };

  componentDidMount(){
    this.getClassrooms()
  }

  getClassrooms = () => {
    fetch('api.class', {
      method: "GET"
    }).then(res => res.json()).then(res => {
      if (res.success) {
        this.setState({ classrooms: res.classrooms, isLoaded: true })
      }
    })
  }

  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ error: "u didnt put everything in" })
    fetch('https://api.classbooster.tech/login', {
      method: 'POST',
      body: {
        email: this.state.username,
        password: this.state.password
      }
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        if(res.success) {
          // redirect to the Dashboard
        } else {
          this.setState({ errorMsg: res.error })
        }
      })        
  };
  
  handleLogin = () => {
     
  };


  render() {
    if (this.state.isLoaded) {
      return (
        <section className="signupLogin-main" >
          <section>
          <nav id="signupLogin-navbar">
            <Link to="/landing" className="signupLogin-logoText">CLASSBOOSTER </Link>
            <button className="signupLogin-support ">Support</button>
            <button className="signupLogin-updates ">Updates</button>
            <Link to="/Signup" className="signupLogin-ButtonA" >SIGN UP</Link>
          </nav>
          </section> 
          <section className="signupLogin-basicBackground">
        <section  className = "loginContainer">
            <center>
              <h1 className="loginTitle"
              >LOGIN</h1>
              {
                this.state.error && (<h4>{this.state.error}</h4>)
              }
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
                className = "signupLogin-ButtonB"
                value="Login"
                onClick={this.handleSubmit}/>
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
}

