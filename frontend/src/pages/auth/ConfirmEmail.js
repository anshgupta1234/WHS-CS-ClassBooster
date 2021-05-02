// Aryan Vora
import React, { Component } from "react";
import "../../css/style.css";


import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';

const Routes = () => (
  <Router>     
          <Route path="/Dashboard"/>
  </Router>
);

export default class ConfirmEmail extends React.Component {
    state = {
        email: "",
        password: "",
        errorInput: undefined,
        errorMsg: undefined
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
            >Confirm Email</h1>
   
            <h4 className="confirmEmail-infoLine">Make sure to check your <br></br>email and click the link on it <br></br>to confirm your signup.<br></br>Once you are done click <br></br> the button below and login <br></br> to your newly created account</h4>

            <Link to="/Login" className="signupLogin-ButtonC">Login</Link>

           
          </center>
          </section>
          </section>
          
      </section>                  
        );
    }

}