// Aryan Vora
import React, { Component } from "react";
import "../../css/style.css";
import Dashboard from '../../pages/Dashboard';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import history from '../../history';


export default class forgotPassword extends React.Component {
  
  state = {
    username: "",
    pasword: "",
    errorInput: undefined,
    errorMsg: undefined,
    succcess: false
  };

  
  showPassword = () => {
    if (this.state.showPassword===true){
    this.setState({ showPassword: false });
    }
    else {
      this.setState({ showPassword: true });
    }
    
  };

  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
    
  };

  handleSubmit = (event) => {
    if(this.state.username === ""){
      this.setState({errorInput: true });
    }
    else if(this.state.password === ""){
      this.setState({errorInput: true });
    }
    else {
      this.setState({errorInput: false });
      fetch('https://classbooster.loca.lt/forgotpassword', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Bypass-Tunnel-Reminder': 'better work',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        if(res.success) {
          console.log("Success");
          this.setState({success: true });

        } else {
          this.setState({ errorMsg: JSON.stringify(res.error) });
          this.setState({errorInput: true });
          console.log(JSON.stringify(res.error));       }
      })
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
            >FORGOT PASSWORD</h1>
              {
              this.state.errorInput || this.state.errorMsg !== undefined ? ( 
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  className="login-placeHolderTextError"
                  value={this.state.username}
                  onChange={this.handleUsername}
                />
                <br />
                <input
                    type={this.state.showPassword ? "text" : "password"}
                    placeholder="New Password"
                  className="login-placeHolderTextError"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
                <br></br>
                  <input type="checkbox"  
                className = "showPassword"
                onClick  = {this.showPassword}
                /> Show Password
                <br/>
                <p className="signupLogin-errorMessage">Some fields are missing or incorrect <br></br>{this.state.errorMsg}</p>
                <input type="submit"  
                className = "signupLogin-ButtonB"
                onClick  = {this.handleSubmit}
                value="Next"/>
              </form>
              
              
              ) 
              : ( 
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
                    type={this.state.showPassword ? "text" : "password"}
                    placeholder="New Password"
                  className="placeHolderTextLogin"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
                <br/>
                {this.state.success ? "Check your email and reset your password" :  ""}

                <br/>
                <input type="checkbox"  
                className = "showPassword"
                onClick  = {this.showPassword}
                /> Show Password
                <br></br>
                <input type="submit"  
                className = "signupLogin-ButtonB"
                onClick  = {this.handleSubmit}
                value="Next"/>
              </form>
              )
  }
  
            
                
            <h2 className="signupLogin-background"><span className="signupLogin-orLine">or</span></h2>


          <Link to="/Signup" className="signupLogin-ButtonC">Sign Up</Link>
          </center>
          </section>
          </section>
          
      </section>      
    );
    
  }
}
