// Aryan
import React, { Component } from 'react'
import "../css/style.css";
import {
	Link
  } from "react-router-dom";



export default class Landing extends Component {
   componentDidMount(){
	  
  } 
  render(){
    return (
			<div className="landing-main">
			<section>
			<nav id="landing-navbar">
			<Link to="/landing" className="landing-logoText">CLASSBOOSTER </Link>
            <a href="mailto:classbooster.whs@gmail.com" className="landing-support">Support</a>
            <Link to="/Login" className="landing-loginButton" >Log in</Link>
			<Link to="/Signup" className="landing-signupButton">Sign up</Link>
		 	</nav>
			 
			</section>
			<span className="landing-line"></span>
			<section className="landing-mainSection">
			<h1 className="landing-title">Create your <br></br> ideal seating chart</h1>
			<h1 className="landing-infoLine">Classbooster provides teachers with specialized <br></br> tools and options to allow them to make <br></br>
			the ultimate seating chart.</h1>
			<center><Link to="/Signup" className="landing-getStarted">Get Started</Link></center>
			<div className="landing-videoBox"></div>
			<img className="landing-video"src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png"></img>

			<span className="landing-line"></span>
			</section>

			<section className="landing-sectionEven">
			<div className="landing-container">
				<div className="landing-leftColumn">
				<h1 className="landing-titleLeft">Instantly create a seating chart</h1>
			<h1 className="landing-infoLineLeft">Classbooster will automatically generate a seating chart based  on your preferences at the click of a button, which you can edit afterwards if something isn’t to your liking.</h1>
				</div>
				<div className="landing-rightColumn">
				<img className="landing-gifTopRight"src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png"></img>
				</div>
			</div>
			</section>

			<span className="landing-line"></span>
			<section className="landing-sectionOdd">
			<div className="landing-container">
				<div className="landing-leftColumn">
				<img className="landing-gifTopLeft"src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png"></img>
				</div>
				<div className="landing-rightColumn">
				<h1 className="landing-titleLeft">Individual options for each student</h1>
				<h1 className="landing-infoLineLeft">Specify the needs of each student with customizable options and Classbooster will automatically take them into account when making a seating chart</h1>
				</div>
			</div>
			</section>

			<span className="landing-line"></span>
			<section className="landing-sectionEven">
			<div className="landing-container">
				<div className="landing-leftColumn">
				<h1 className="landing-titleLeft">Rearrange your seating chart to your liking</h1>
			<h1 className="landing-infoLineLeft">Classbooster allows you to add, delete, or move seats around to exactly where you want them</h1>
				</div>
				<div className="landing-rightColumn">
				<img className="landing-gifTopRight"src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png"></img>
				</div>
			</div>
			</section>

			<span className="landing-line"></span>
			<section className="landing-sectionOdd">
			<center>
				<h1 className="landing-mediumText">Design Your Own Seating <br></br> Chart for free</h1>
				<Link to="/Signup" className="landing-signupLink">Sign up</Link>
				<h3>or</h3>
				<Link to="/Login" className="landing-loginLink">Log in</Link>

			</center>
			</section>

			<span className="landing-line"></span>
			
			</div>
		)
  }
}