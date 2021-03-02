// Raj Nawal
import React, { Component } from 'react'
import "../css/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Example from './DnDComponents/example.js'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
export default class ClassEditor extends Component {
	state = {
    onClassroom: true, 
    first: true,
    desks: {
      "9qwe7r0af": { x: 210, y: 358 },
      "asertr": { x: 210, y: 358 },
      "fasdvxz": { x: 210, y: 358 },
		},
		students: [
			{ name: "Ansh gupta", visibility: true, extra_help: true, avoid: [ "asdf", "asdfa", "afs" ] },
			{ name: "Ansh gupta", visibility: true, extra_help: true, avoid: [ "asdf", "asdfa", "afs" ] },
			{ name: "Ansh gupta", visibility: true, extra_help: true, avoid: [ "asdf", "asdfa", "afs" ] },
			{ name: "Ansh gupta", visibility: true, extra_help: true, avoid: [ "asdf", "asdfa", "afs" ] },
		],
		assigned: { "867asdf": "Ansh" }
  }
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
				<nav id="navbar2">
					<svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor" /><path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor" /><path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="currentColor" /></svg>
					<span className="logoText">CLASSBOOSTER </span>
					<img draggable="false" id="userProfilePicture" src = "https://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png" />
				</nav>
				<nav className="secondaryNav">
					<button onClick = {() => this.handleChange(1)} id="classroomNavButton" className="blackText" >Classroom</button>
					<button onClick = {() => this.handleChange(0)} id="studentsNavButton" >Students</button>
				</nav>
				<span className="lineContainer">
					<span className="line" id="line"></span>
				</span>
				{
				this.state.list.map(( key, i ) => {
					
				}) 
				}
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