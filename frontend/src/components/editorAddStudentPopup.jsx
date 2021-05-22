import React, { Component } from 'react';
import Select from 'react-select'

class EditorAddStudentPopup extends Component {
    state = { 
        nameInput: "",
        visibilityInput: false,
        extraHelpInput: false,
        hateInput: [], 
    }
    
    checkInputs() {
        const nameInput = this.state.nameInput.trim()
        const {visibilityInput, extraHelpInput, hateInput} = this.state;
        if (nameInput.length > 0) {
            let hate = [];
            let hateNames = [];
            for (let i=0; i<hateInput.length; i++) {
                 hate.push(hateInput[i].value);
                 hateNames.push(hateInput[i].label);
            }
            let studentID = "";
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for ( let i = 0; i < Math.floor((Math.random() * 5)) + 8 ; i++ ) {
                studentID += characters.charAt(Math.floor(Math.random() * 62));
            }
            this.props.addStudent(studentID, nameInput, visibilityInput, extraHelpInput, hate, hateNames)
        }
    }

    handleInputChange = (e) => {
        let inputTarget = e.target
        let inputName = inputTarget.name
        if (inputTarget.type === "text") {
            this.setState({[inputName]: inputTarget.value})
        } else {
            this.setState({[inputName]: inputTarget.checked})
        }
    }

    handleSelectChange = (selectedOptions) => {
        let hateInput = [];
        for (let i=0; i<selectedOptions.length; i++) {
            hateInput.push(selectedOptions[i]);
        }
        this.setState({ hateInput });
    }
    
    render() { 
        const selectOptions = [];
        const {nameInput, visibilityInput, extraHelpInput, hateInput} = this.state;
        const students = this.props.students;
        for (let id in students) {
           selectOptions.push({value: id, label: students[id].name})
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
        return ( 
            <div className="dashboard-popup-background">
                <div id="editor-addStudentPopup">
                    <p className="editor-popupHeader">Add Student</p>
                    <label htmlFor="editor-popupStudentNameInput" className="editor-popupStudentLabel">Student name</label>
                    <br></br>
                    <input
                        id="editor-popupStudentNameInput"
                        name="nameInput"
                        value={nameInput}
                        onChange={this.handleInputChange}
                        maxLength="30"
                        autoComplete="off"
                        spellCheck={false}
                        autoFocus={true}
                    ></input>
                    <div className="editor-popupCheckboxContainer">
                        <input
                            id="editor-popupVisibilityInput"
                            name="visibilityInput"
                            checked={visibilityInput}
                            onChange={this.handleInputChange}
                            className="editor-popupCheckboxInput"
                            type="checkbox"
                        ></input>   
                        <label htmlFor="editor-popupVisibilityInput">
                            Vision problems
                            <br></br>
                            <span>Will place student nearer to whiteboard</span>
                        </label>
                    </div>
                    <div className="editor-popupCheckboxContainer">                      
                        <input
                            id="editor-popupExtraHelpInput"
                            name="extraHelpInput"
                            checked={extraHelpInput}
                            onChange={this.handleInputChange}
                            className="editor-popupCheckboxInput"
                            type="checkbox"
                        ></input>
                        <label htmlFor="editor-popupExtraHelpInput">
                            Needs extra help
                            <br></br>
                            <span>Will place student nearer to whiteboard</span>
                        </label>   
                    </div>
                    <div className="editor-popupSelectContainer">
                        <label htmlFor="editor-popupSelectInput" className="editor-popupSelectIncompatibleLabel">Not to be seated with</label>
                        <Select
                            id="editor-popupSelectInput"
                            onChange={this.handleSelectChange}
                            styles={customStyles}
                            options={selectOptions}
                            value={hateInput}
                            isMulti={true}
                            closeMenuOnSelect={false}
                            maxMenuHeight="140px"
                        />
                    </div>
                    <button id="editor-confirmAddStudentButton" onClick={() => this.checkInputs()}>Add</button>
                    <button id="editor-cancelButton" onClick={() => this.props.toggleAddStudentPopup()}>Cancel</button>
                </div>
            </div>
         );
    }
}

export default EditorAddStudentPopup;