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
		isLoaded : true,
		onClassroom : true,
		first: true,
		numDesks: null,
		profileDropdownVisible: false,
		desks: {},
		whiteboard: { top: 0, left: 450 },
 		teacherDesk: { top: 60, left: 700, title: "Teacher Desk" },
		pairing: { "9pasdf09f8": "monkey", "akjdhf976": "donkey" },
		students: [
			{
				"name": "Ansh simp #1",
				"visibility": false,
				"extra_help": true,
				"hate": ["Unch Gorpta", "Jim"],
				"index": 0
			},
			{
				"name": "Unch Gorpta",
				"visibility": true,
				"extra_help": false,
				"hate": 0,
				"index": 1
			},
			{
				"name": "Jim",
				"visibility": true,
				"extra_help": true,
				"hate": ["Ansh simp #1"],
				"index": 2
			},
		],
		addStudentPopupVisible: false,
		deleteStudentPopupVisible: false,
		selectedStudentIndex: -1,
	}

	componentDidMount() {
		document.addEventListener("mousedown", this.handleWindowClick)
		let tempDesks = this.state.desks
		Object.keys(tempDesks).forEach(key => {
			tempDesks[key]["title"] = this.state.pairing[key]
		})
		tempDesks["teacherDesk"] = this.state.teacherDesk
		this.setState({ desks: tempDesks })
	}

	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleWindowClick)
	}

	toggleProfileDropdown = () => {
		this.setState({
		  profileDropdownVisible: !this.state.profileDropdownVisible,
		});
	};

	updateDesks = (desks) => {
		this.setState({ desks: desks, teacherDesk: desks.teacherDesk })
	}

	deleteDesk = (id) => {
		let desks = this.state.desks
		delete desks[id]
		this.setState({ desks: desks})
	}

	// updateTeacher = (desks) => {
	// 	this.setState({ teacherDesk: desks.teacherDesk })
	// }

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

handleDesk = () => {
	const deskNumber = document.getElementById("deskInput").value
	if (parseInt(deskNumber) >= 0) {
	  this.setState({
		numDesks: deskNumber
	  });
	} else {
	  this.setState({
		numDesks: 0,
	  });
	}
	const x = document.getElementById("snackbar");
	  x.className = "show";
	  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	
	let tempDesks = this.state.desks
	for (let index = 0; index < deskNumber; index++) {
		let result = "";
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for ( let i = 0; i < Math.floor((Math.random() * 5)) + 8 ; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * 62));
		}
		tempDesks[result] = {"top" : 0, "left" : 0}
	}
	this.setState({ desks: tempDesks })
  };

render() {
	const selectedStudent = this.state.selectedStudentIndex > -1 ? this.state.students[this.state.selectedStudentIndex] : 
		{name: "", visibility: false, extra_help: false, hate: 0};

    return (
		this.state.isLoaded && (
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
					<a href="#" id="dashboard-account-link">
					  Logout
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
							<Example desks={this.state.desks} updateDesks={this.updateDesks} deleteDesk={this.deleteDesk}/>
						</DndProvider>
						</div>
					</div>
					<div className="buttons">
					<div className="group">
								<input type="text" id="deskInput" className="input" maxLength="2" placeholder=" " />
								<span className="highlight"></span>
								<span className="bar"></span>
								<label className="label">Add Desks</label>
								<button className="pure-material-button-contained" onClick={this.handleDesk}>
									<svg xmlns="http://www.w3.org/2000/svg" className="checkMark" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
										<line x1="12" y1="5" x2="12" y2="19" />
										<line x1="5" y1="12" x2="19" y2="12" />
									</svg>
								</button>
							</div>
							<button className="blackButton">Save Seating Chart</button>
							<button className="whiteButton">Create Seating Chart</button>
						</div>
						<div id="snackbar">
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<circle cx="12" cy="12" r="9" />
								<path d="M9 12l2 2l4 -4" />
							</svg>
							{this.state.numDesks} more desk(s) were added
						</div>
				</section>
				<section className={this.getClass(0)} id="studentSection">
					<StudentSelector
						students={this.state.students}
						deleteStudent={this.deleteStudent}
						selectedStudentIndex={this.state.selectedStudentIndex}
						handleInputChange={this.handleInputChange}
						handleSelectChange={this.handleSelectChange}
						handleStudentSelect={this.handleStudentSelect}
						toggleAddStudentPopup={this.toggleAddStudentPopup}
						toggleDeleteStudentPopup={this.toggleDeleteStudentPopup}
						saveStudentEdit={this.saveStudentEdit}
						nameInput={selectedStudent.name}
						visibilityInput={selectedStudent.visibility}
						extraHelpInput={selectedStudent.extra_help}
						hate={selectedStudent.hate}
					></StudentSelector>
				</section>
			</div>
			{this.state.addStudentPopupVisible && 
			<EditorAddStudentPopup
				students={this.state.students}
				addStudent={this.addStudent}
				toggleAddStudentPopup={this.toggleAddStudentPopup}
			/>}
			{this.state.deleteStudentPopupVisible && 
			<EditorDeleteStudentPopup
				students={this.state.students}
				selectedStudentIndex={this.state.selectedStudentIndex}
				deleteStudent={this.deleteStudent}
				toggleDeleteStudentPopup={this.toggleDeleteStudentPopup}
			/>}
		</section>
		)
	)
  }
}