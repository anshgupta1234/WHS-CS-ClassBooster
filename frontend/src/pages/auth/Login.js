// Aryan Vora
import React, { Component } from "react";
import "../../css/style.css";
import Dashboard from '../../pages/Dashboard';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import history from '../../history';


export default class Login extends React.Component {
  
  state = {
    email: "",
    password: "",
    errorInput: undefined,
    errorMsg: undefined,
    showPassword: false
  };

  
  
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
    
  };
  showPassword = () => {
    if (this.state.showPassword===true){
    this.setState({ showPassword: false });
    }
    else {
      this.setState({ showPassword: true });
    }
    
  };

  handleSubmit = (event) => {
    if(this.state.email === ""){
      this.setState({errorInput: true });
    }
    else if(this.state.password === ""){
      this.setState({errorInput: true });
    }
    else {
      this.setState({errorInput: false });
      fetch('https://classbooster.loca.lt/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Bypass-Tunnel-Reminder': 'better work',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password
      })
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        if(res.success) {
          history.push("/dashboard"); 
          console.log("Success");
          
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
            >LOGIN</h1>
              {
              this.state.errorInput || this.state.errorMsg !== undefined ? ( 
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Email/Username"
                  className="login-placeHolderTextError"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
                <br />
                <input
                    type={this.state.showPassword ? "text" : "password"}
                    placeholder="Password"
                  className="login-placeHolderTextError"
                  value={this.state.password}
                  onChange={this.handlePassword}                 
                />
                <br></br>
                <input type="checkbox"  
                className = "showPassword"
                onClick  = {this.showPassword}
                /> Show Password

                <br/><p className="signupLogin-errorMessage">Some fields are missing or incorrect <br></br>{this.state.errorMsg}</p>
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
                  placeholder="Email/Username"
                  className="placeHolderTextLogin"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
                <br />
                <input
                    type={this.state.showPassword ? "text" : "password"}
                    placeholder="Password"
                  className="placeHolderTextLogin"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
                   <br></br>
                <input type="checkbox"  
                className = "showPassword"
                onClick  = {this.showPassword}
                /> Show Password
                <br/>
                
                <input type="submit"  
                className = "signupLogin-ButtonB"
                onClick  = {this.handleSubmit}
                value="Login"/>
              </form>
         
              )
  }
  
            
                
  <Link to="/forgotPassword" className="signupLogin-forgotPassword">Forgot Password</Link>                <h2 className="signupLogin-background"><span className="signupLogin-orLine">or</span></h2>


          <Link to="/Signup" className="signupLogin-ButtonC">Sign Up</Link>
          </center>
          </section>
          </section>
          
      </section>      
    );
    
  }
}

