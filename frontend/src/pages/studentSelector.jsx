import React, { Component } from 'react';
import Select from "react-select"
import {ReactComponent as TrashcanIcon} from "../assets/Red trashcan.svg"

class StudentSelector extends Component {

    renderStudentsList = () => {
        const {students, handleStudentSelect, toggleDeleteStudentPopup} = this.props;
        return students.map(student => (
            <div className="editor-student overpass" onClick={() => handleStudentSelect(student.index)} tabIndex="-1" key={student.index} id={"editor-student" + student.index}>
                {student.name}
                <button className="editor-deleteStudent" onClick={toggleDeleteStudentPopup}><TrashcanIcon/></button>
            </div>
        ))
    }

    render() { 
        const {students, selectedStudentIndex, toggleAddStudentPopup, handleInputChange, handleSelectChange, nameInput, visibilityInput, extraHelpInput, hate} = this.props;
        const options = [];
        students.filter(function (student) {
            return student !== students[selectedStudentIndex]
        }).map(student => (
            options.push({value: student.name, label: student.name})
        ))
        const customStyles = {
            option: (provided) => ({
            ...provided,
            padding: "5px",
            })}
        const hateSelect = [];
        for (let i=0; i<hate.length; i++) { //need to convert hate array from ClassEditor state to an array that the Select Component can use
            hateSelect.push({label: hate[i], value: hate[i]})
        }
        return ( 
            <div id="editor-studentSection">
                <div className="editor-headerBar">
                    <span className="editor-className chivo">Class Name</span>
                    <span className="editor-studentAttributesHeader chivo">Student attributes</span>
                </div>
				<section className="editor-studentList">
					<div className="editor-studentListNavbar">
						<button className="editor-addStudentButton" onClick={() => toggleAddStudentPopup()}>Add Student</button>
					</div>
                    {this.renderStudentsList()}
                    <button className="editor-saveAllStudentsButton"></button>
				</section>
                <section className="editor-studentOptionsPanel">
                    <form className="editor-editOptionsForm">
                        <div className="editor-panelNameInputContainer">
                            <label htmlFor="editor-panelNameInput" id="editor-panelNameLabel">Student Name</label>
                            <br></br>
                            <input
                                id="editor-panelNameInput"
                                name="nameInput"
                                value={nameInput}
                                onChange={handleInputChange}
                                maxLength="30"
                                autoComplete="off"
                                spellCheck={false}
                            ></input>
                        </div>
                        <div className="editor-panelCheckboxContainer">
                            <input
                                id="editor-panelVisibilityInput"
                                name="visibilityInput"
                                checked={visibilityInput}
                                onChange={handleInputChange}
                                className="editor-panelCheckboxInput"
                                type="checkbox"
                            ></input>
                            <label htmlFor="editor-panelVisibilityInput">
                                Vision problems
                                <br></br>
                                <span>Will place student nearer to whiteboard</span>
                            </label>                       
                        </div>
                        <div className="editor-panelCheckboxContainer">
                            <input
                                id="editor-panelExtraHelpInput"
                                name="extraHelpInput"
                                checked={extraHelpInput}
                                onChange={handleInputChange}
                                className="editor-panelCheckboxInput"
                                type="checkbox"
                            ></input>
                            <label htmlFor="editor-panelExtraHelpInput">
                                Needs extra help
                                <br></br>
                                <span>Will place student nearer to teacher</span>
                            </label>                       
                        </div>
                        <div className="editor-panelSelectContainer">
                            <label htmlFor="editor-panelSelectInput">Not to be seated near</label>
                            <Select
                                id="editor-panelSelectInput"
                                onChange={handleSelectChange}
                                value={hateSelect}
                                styles={customStyles}
                                options={options}
                                isMulti={true}
                                closeMenuOnSelect={false}
                                maxMenuHeight="180px"
                            />
                        </div>
                    </form>
                </section>
            </div>
         );
    }
}
 
export default StudentSelector;