// Aryan Vora
import React, { Component } from "react";
import "../../css/style.css";


import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';

const Routes = () => (
  <Router>     
          <Route path="/Dashboard"/>
  </Router>
);

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errorInput: undefined,
    errorMsg: undefined
  };

  componentDidMount(){
    this.setState({errorInput: false });
    fetch('https://bf4df9369820.ngrok.io/login', {
    method: 'GET',
  }).then(res => res.json())
    .then(res => {
      console.log(res); 
        this.props.history.push('/Dashboard'); 
      
    })  }
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
    
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
      fetch('https://bf4df9369820.ngrok.io/login', {
      method: 'POST',
      mode: 'no-cors',
      header: 'Access-Control-Allow-Origin',

      body: {
        email: this.state.username,
        password: this.state.password
      }
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        if(res.success) {
          this.props.history.push('/Dashboard');
          
        } else {
          this.setState({ errorMsg: res.error });
        }
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
              this.state.errorInput ? ( 
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
                  placeholder="Email/Username"
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
              </form>
         
              )
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

