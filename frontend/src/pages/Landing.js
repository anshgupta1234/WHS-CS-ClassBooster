// Ronen
import React, { Component } from 'react'
import "../css/Landing.css"


export default class Landing extends Component {
  render(){
    return (
			<div id="all">
				<a href="http://localhost:3000/editor">Class Editor</a>
				<br></br>
				<a href="http://localhost:3000/home">Dashboard</a>
				<br></br>
				<a href="http://localhost:3000/login">Login</a>
				<br></br>
				<a href="http://localhost:3000/signup">Signup</a>
			</div>
		)
  }
}