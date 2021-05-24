import React, { Component } from 'react';
import Select from "react-select"
import {ReactComponent as TrashcanIcon} from "../assets/Red trashcan.svg"

class StudentSelector extends Component {

    renderStudentsList = () => {
        const {students, handleStudentSelect, toggleDeleteStudentPopup} = this.props;
        let studentsList = [];
        for (let id in students) {
            studentsList.push(
            <div className="editor-student overpass" onClick={() => handleStudentSelect(id)} tabIndex="-1" key={id} id={"editor-student" + id}>
                {students[id].name}
                <button className="editor-deleteStudent" onClick={toggleDeleteStudentPopup}><TrashcanIcon/></button>
            </div>
            )
        }
        return studentsList;
    }

    render() { 
        const {students, selectedStudentId, toggleAddStudentPopup, handleInputChange, handleSelectChange, handleSaveStudentsAndDesks, nameInput, visibilityInput, extraHelpInput, hateId, hate} = this.props;
        const selectOptions = [];
        for (let id in students) {
            if (id !== selectedStudentId) {
                selectOptions.push({value: id, label: students[id].name})
            }
        }
        const customStyles = {
            option: (provided) => ({
                ...provided,
                padding: "5px",
                whiteSpace: "pre",
            }),
            multiValueLabel: (provided) => ({
                ...provided,
                whiteSpace: "pre",
            })
            }
        const hateSelect = [];
        for (let i=0; i<hateId.length; i++) { //need to convert student hateId array to an array that the Select Component can use
            let studentName = students[hateId[i]].name
            hate.length = 0;
            hate.push(studentName);
            hateSelect.push({value: hateId[i], label: studentName});
        }
        return ( 
            <div id="editor-studentSection">
                <div className="editor-headerBar">
                    <span>Class Name</span>
                    <span className="editor-studentAttributesHeader">Student attributes</span>
                </div>
				<section className="editor-studentList">
					<div className="editor-studentListNavbar">
						<button className="editor-addStudentButton" onClick={() => toggleAddStudentPopup()}>Add Student</button>
					</div>
                    {this.renderStudentsList()}
                    <button className="editor-saveStudentsButton" onClick={handleSaveStudentsAndDesks}>Save all students</button>   
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
                                options={selectOptions}
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