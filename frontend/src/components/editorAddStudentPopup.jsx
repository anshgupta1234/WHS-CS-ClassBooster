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
        let nameInput = this.state.nameInput.trim()
        const {visibilityInput, extraHelpInput, hateInput} = this.state;
        if (nameInput.length > 0) {
            let hate = [];
            for (let i=0; i<hateInput.length; i++) {
                 hate.push(hateInput[i].label)
            }
            this.props.addStudent({
                "name": nameInput, 
                "visibility": visibilityInput, 
                "extra_help": extraHelpInput, 
                "hate": hate, 
                "index": this.props.students.length})
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
            hateInput.push({label: selectedOptions[i].label, value: selectedOptions[i].value})
        }
        this.setState({ hateInput })
    }
    render() { 
        const options = [];
        this.props.students.map(student => (
            options.push({value: student.name, label: student.name})
        ))
        const customStyles = {
            option: (provided) => ({
            ...provided,
            padding: "5px",
            })}
        const {nameInput, visibilityInput, extraHelpInput, hateInput} = this.state;
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
                            options={options}
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