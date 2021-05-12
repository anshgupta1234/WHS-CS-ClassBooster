import React, { Component } from "react";

class DashboardRenameClassroomPopup extends Component {
  state = {
    noClassnameWarning: "",
  };

  checkInputs() {
    const {selectedClassroomIndex, setClassroomName, addClassroom, toggleRenameClassroomPopup} = this.props;
    if (document.getElementById("dashboard-classnameInput").value.trim().length > 0) {
      if (selectedClassroomIndex === -1) {
        addClassroom();
        toggleRenameClassroomPopup(-1);
      } else {
        setClassroomName(selectedClassroomIndex);
        toggleRenameClassroomPopup(-1);
      }
    } else {
      this.setState({ noClassnameWarning: "This field is required" });
    }
  }

  render() {
    const {selectedClassroomIndex, handleInputChange, toggleRenameClassroomPopup, nameInput, nicknameInput} = this.props;
    let header, classnameLabel, nicknameLabel;
    if (selectedClassroomIndex === -1) {
      header = "Create classroom";
      classnameLabel = "Classname (required)";
      nicknameLabel = "Nickname";
    } else {
      header = "Rename classroom";
      classnameLabel = "Classname";
      nicknameLabel = "Nickname";
    }

    return (
      <div className="dashboard-popup-background">
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo&family=Overpass:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <div className="dashboard-popup-classname">
          <p>{header}</p>
          <label htmlFor="dashboard-classnameInput">{classnameLabel}</label>
          <span style={{ color: "#e60000" }}>
            {this.state.noClassnameWarning}
          </span>
          <br></br>
          <input
            name="dashboard-nameInput"
            id="dashboard-classnameInput"
            maxLength="40"
            value={nameInput}
            onChange={handleInputChange}
            autoComplete="off"
            spellCheck={false}
          ></input>
          <label htmlFor="dashboard-nicknameInput" id="dashboard-nickname-label">{nicknameLabel}</label>
          <br></br>
          <input
            name="dashboard-nicknameInput"
            id="dashboard-nicknameInput"
            maxLength="40"
            value={nicknameInput}
            onChange={handleInputChange}
            autoComplete="off"
            spellCheck={false}
          ></input>
          <br></br>
          <button
            className="dashboard-popup-classname-save"
            onClick={() => this.checkInputs()}
          >
            Save
          </button>
          <button
            className="dashboard-popup-classname-cancel"
            onClick={toggleRenameClassroomPopup}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default DashboardRenameClassroomPopup;
