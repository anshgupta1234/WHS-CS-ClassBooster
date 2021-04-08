// Raj Nawal
import React, { Component } from 'react'
import "../css/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Example from './DnDComponents/example.js'
import { DndProvider } from 'react-dnd';
import { ReactComponent as DefaultProfile } from "../assets/defaultProfile.svg";
import { HTML5Backend } from 'react-dnd-html5-backend';
import StudentSelector from "./studentSelector"
import EditorAddStudentPopup from "../components/editorAddStudentPopup"
import EditorDeleteStudentPopup from "../components/editorDeleteStudentPopup"
import { DraggableBox } from "./DnDComponents/DraggableBox";

export default class ClassEditor extends Component {

	state = {
		onClassroom : true,
		first: true,
		profileDropdownVisible: false,
		desks: {
			"9pasdf09f8": {
				"left": 30,
				"top": 60,
			},
			"akjdhf976": {
				"left": 120,
				"top": 60,
			},
		},
		whiteboard: { top: 0, left: 450 },
 		teacherDesk: { top: 60, left: 700, title: "Teacher Desk" },
		pairing: { "9pasdf09f8": "monkey", "akjdhf976": "donkey" }
	}

	componentDidMount(){
		let tempDesks = this.state.desks
		Object.keys(tempDesks).forEach(key => {
			tempDesks[key]["title"] = this.state.pairing[key]
		})
		tempDesks["teacherDesk"] = this.state.teacherDesk
		this.setState({ desks: tempDesks })
	}

	toggleProfileDropdown = () => {
		this.setState({
		  profileDropdownVisible: !this.state.profileDropdownVisible,
		});
	};

	updateDesks = (desks) => {
		console.log(this.state.desks)
		this.setState({ desks: desks, teacherDesk: desks.teacherDesk })
		return "dogger"
	}

	updateTeacher = (desks) => {
		this.setState({ teacherDesk: desks.teacherDesk })
		return "dogger"
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

addStudent = (student) => {
	this.setState({students: [...this.state.students, student]}, () => {
	this.toggleAddStudentPopup();
	})
}

deleteStudent = (index) => {
	let students = this.state.students; 
	students.splice(index, 1);
	for (let i=index; i<students.length; i++) {
		students[i].index = students[i].index - 1;
	}
	this.setState({students, deleteStudentPopupVisible: false})
}

toggleAddStudentPopup = () => {
	this.setState({addStudentPopupVisible: !this.state.addStudentPopupVisible})
}

toggleDeleteStudentPopup = () => {
	console.log("Toggle delete just entered")
	this.setState({deleteStudentPopupVisible: !this.state.deleteStudentPopupVisible}, () => console.log("Delete student popup visible: " + this.state.deleteStudentPopupVisible))
}

handleInputChange = (e) => {
	if (this.state.selectedStudentIndex > -1) {
		let inputTarget = e.target
		let inputName = inputTarget.name
		let students = this.state.students;
		if (inputName === "nameInput") {
			students[this.state.selectedStudentIndex].name = inputTarget.value;
		} else if (inputName === "visibilityInput") {
			students[this.state.selectedStudentIndex].visibility = inputTarget.checked;
		} else {
			students[this.state.selectedStudentIndex].extra_help = inputTarget.checked;
		}
		this.setState({students})
	}
	
}

handleSelectChange = (selectedOptions) => {
	if (this.state.selectedStudentIndex > -1) {
		let students = this.state.students;
		students[this.state.selectedStudentIndex].hate = [];
		for (let i=0; i<selectedOptions.length; i++) {
			students[this.state.selectedStudentIndex].hate.push(selectedOptions[i].value)
		}
		this.setState({students})
	}
}

handleWindowClick = (e) => {
	if (this.state.selectedStudentIndex > -1 && 
		!this.state.onClassroom && (e.target.className === "dashboard-navbar" || e.target.className === "secondaryNav")) {
			document.getElementById("editor-student" + this.state.selectedStudentIndex).classList.remove("editor-focus")
			this.setState({selectedStudentIndex: -1, nameInput: "", visibilityInput: false, extraHelpInput: false, hate: []})
		}
}

saveStudentEdit = (students) => {
	this.setState({students})
}

handleStudentSelect = (studentIndex) => {
	if (this.state.selectedStudentIndex > -1) {
		document.getElementById("editor-student" + this.state.selectedStudentIndex).classList.remove("editor-focus")
	}
	this.setState({
		selectedStudentIndex: studentIndex,
	}, () => document.getElementById("editor-student" + studentIndex).classList.add("editor-focus"))
}

render() {
	const selectedStudent = this.state.selectedStudentIndex > -1 ? this.state.students[this.state.selectedStudentIndex] : 
		{name: "", visibility: false, extra_help: false, hate: 0};
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
								<Example desks={this.state.desks} updateDesks={this.updateDesks}/>
							</DndProvider>
							</div>
						</div>
						<div className="buttons">
							<button className="blackButton">Save Seating Chart</button>
							<button className="whiteButton">Create Seating Chart</button>
						</div>
					</section>
					<section className={this.getClass(0)} id="studentSection">

					</section>
				</div>
		</section>
		)
  }
}