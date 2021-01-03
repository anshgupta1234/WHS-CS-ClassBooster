// Aryan Vora
import React, { Component } from "react";
import { NavbarBrand } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export default class Signup extends React.Component {
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
    alert(
      "Your username is: " +
        this.state.username +
        " and your password is: " +
        this.state.password
    );
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <div>
        <Navbar collapseOnSelect  expand="md" 
        style={{
          boxShadow: "0 0 20px  rgba(0,0,0,0.6)",  
        }}>
            <Navbar.Brand style={{
              paddingLeft: "2%", 
              width:"80px",
              fontFamily: "Megrim, cursive",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "32px",
              lineHeight: "43px",
              textAlign: "center", 
              }}>
              ClassBooster
            </Navbar.Brand>
            <Navbar.Brand>
            <button style={{
                float: "right",
                border: "0px", 
			        	width: "120px", 
                borderRadius:"25px" ,
                background: "rgb(159,208,235)",
                color: "Black",
                fontFamily: "Chivo, sans-serif",
                fontSize: "20px",
                lineHeight: "36px",
                fontWeight: "400",
                textAlign: "center",
                height: "35px",
                margin: "4px 20px"
              }}  
              > SIGN UP</button>
              <button style={{
                border: "0px",
                float: "right",
                background: "white",
                width: "156px",
                fontFamily: "Chivo, sans-serif",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "26px",
                lineHeight: "36px",
                textAlign: "center", 
              }} >
                Support
              </button> 
              <button style={{
                float: "right",
                border: "0px",
                background: "white",
                width: "156px",
                fontFamily: "Chivo, sans-serif",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "26px",
                lineHeight: "36px",
                textAlign: "center",   
                }} >
                Updates
              </button>
            </Navbar.Brand>
          </Navbar>
        </div>   
      <div  
    style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)', 
        border: '0px', 
        width: '440px',
        height: "393px",
        boxShadow: "0 0 20px  rgba(0,0,0,0.6)",
    }}>
      <div>
          <center>
            <h1 
            style={{
              fontFamily: "Chivo, sans-serif",
              fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "48px",
                lineHeight: "57px",
                textAlign: "center",  
            }}
            >LOGIN</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                style={{ 
                  width: "78%", 
                  height: "35px", 
                  borderRadius:"13px", 
                  outline: "none", 
                  margin:"10px",
                  border: "0.5px solid #000000"
                }}
                value={this.state.username}
                onChange={this.handleUsername}
              />
              <br />
              <input
                type="text"
                placeholder="Password"
                style={{ 
                  width: "78%",
                  height: "35px", 
                  borderRadius:"13px", 
                  outline: "none", 
                  margin:"0px",
                  border: "0.5px solid #000000"
                }}
                value={this.state.password}
                onChange={this.handlePassword}
              />
              <br />
              <input type="submit"  style={{
                border: "0px",
                height: "10%", 
                fontFamily: "Chivo, sans-serif",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "24px",
                lineHeight: "29px",
                textAlign: "center",                
                width: "37%", 
                borderRadius:"20px" ,
                background: "#B0FFFF",
                margin: "10px"
                }} 
                value="Sign-in"/>
            </form>
            <button style={{
            width: "163px",
            height: "20px",
            left: "630px",
            top: "510px",
            fontFamily: "Overpass, sans-serif",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "25px",
            textAlign: "center",
            color: "#000000",
            background: "white",
            border: "0px"
            

              }}>
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
            fontFamily: "Roboto Condensed, sans-serif",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "12px",
            textAlign: "center",
            }}>or</span></h6>

            <button style={{
                border: "0px",
                height: "10%", 
                fontFamily: "Chivo, sans-serif",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "24px",
                lineHeight: "29px",
                textAlign: "center",                
                width: "37%", 
                borderRadius:"20px" ,
                background: "#01CCC0",
                margin: "10px"
              }}  
              > Signup</button>
          </center>
          </div>
        </div>
      </div>
    );
  }
}
