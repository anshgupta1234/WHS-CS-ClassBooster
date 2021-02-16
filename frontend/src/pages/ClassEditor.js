// Raj Nawal
import React, { Component } from 'react'
import "../css/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Example from './DnDComponents/example.js'
import { DndProvider } from 'react-dnd';
import { ReactComponent as DefaultProfile } from "../assets/defaultProfile.svg";
import { HTML5Backend } from 'react-dnd-html5-backend';
export default class ClassEditor extends Component {
	state = {
		onClassroom : true,
		first: true,
		profileDropdownVisible: false
	}
toggleProfileDropdown = () => {
		this.setState({
		  profileDropdownVisible: !this.state.profileDropdownVisible,
		});
	};
getClass(para){
	const cs = document.getElementById('classSection');
	const ss = document.getElementById('studentSection');
		if(para){
			if(this.state.onClassroom){
				if(cs)
					setTimeout(function(){cs.classList.remove("hidden"); }, 300);
				return "classRoomSection fade-in-left";
			}
			else{
				if(cs)
					setTimeout(function(){cs.classList.add("hidden"); }, 300);
				return "classroomSection fade-out-left";
			}
		}
		else{
			if (this.state.onClassroom){
				if(ss)
					setTimeout(function(){ss.classList.add("hidden"); }, 300);
				if(this.state.first) return "studentSection fade-out-right hidden";
				return "studentSection fade-out-right";
			}
			else{
				if(ss)
					ss.classList.remove("hidden");
				return "studentSection fade-in-right";
			}
		}
	}
handleChange(para){
	this.setState({ first : false })
		if(para){
			this.setState({onClassroom : true});
			document.getElementById('classroomNavButton').classList.add("blackText");
			document.getElementById('studentsNavButton').classList.remove("blackText");
			document.getElementById('line').classList.remove("forward");
			document.getElementById('line').classList.add("reverse");
		} 
		else{
			this.setState({onClassroom : false});
			document.getElementById('studentsNavButton').classList.add("blackText");
			document.getElementById('classroomNavButton').classList.remove("blackText");
			document.getElementById('line').classList.remove("reverse");
			document.getElementById('line').classList.add("forward");
		}
	}
  render(){
    return (
		<section className="bgSection">				
			<nav className="dashboard-navbar-container">
				<div className="dashboard-navbar">
				<a href="http://localhost:3000" className="dashboard-logo">
					CLASSBOOSTER
				</a>
				<button
					id="dashboard-profile"
					onClick={this.toggleProfileDropdown}
				>
					{<DefaultProfile />}
				</button>
				{this.state.profileDropdownVisible && (
					<div id="dashboard-profile-dropdown">
					<link
					  href="https://fonts.googleapis.com/css2?family=Chivo&family=Overpass:wght@300&display=swap"
					  rel="stylesheet"
					></link>
					<a href="#" id="dashboard-account-link">
					  Account
					</a>
					<a href="#" id="dashboard-support-link">
					  Support
					</a>
				  	</div>
				)}
				</div>
			</nav>
				<nav className="secondaryNav">
					<button onClick = {() => this.handleChange(1)} id="classroomNavButton" className="blackText" >Classroom</button>
					<button onClick = {() => this.handleChange(0)} id="studentsNavButton" >Students</button>
				</nav>
				<span className="lineContainer">
					<span className="line" id="line"></span>
				</span>
				<div className="tabContainer">
					<section className={this.getClass(1)} id="classSection">
						<span className="chivo classname">Class Name</span>
						<div className="roomSpace">
							<div className="whiteboard overpass">Whiteboard</div>
							<div className="deskSpace">
							<DndProvider backend={HTML5Backend}>
								<Example />
							</DndProvider>
							</div>
						</div>
						<div className="buttons">
							<button className="blackButton">Save Seating Chart</button>
							<button className="whiteButton">Create Seating Chart</button>
						</div>
					</section>
					<section className={this.getClass(0)} id="studentSection">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-5">
									<h3 className="blackText chivo">
										Class Name
									</h3>
								</div>
							</div>
						</div>
					</section>
				</div>
		</section>
		)
  }
}