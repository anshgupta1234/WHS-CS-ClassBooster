import React, { Component } from "react";

class DashboardRenameClassroomPopup extends Component {
  state = { noClassnameWarning: "" };
  checkInputs() {
    let indexOfClassroom = this.props.selectedClassroom.index;
    if (document.getElementById("dashboard-classname").value.trim().length > 0) {
      this.props.setClassroomName(
        indexOfClassroom,
        document.getElementById("dashboard-classname").value,
        document.getElementById("dashboard-nickname").value
      );
      this.props.toggleClassroomOptions(indexOfClassroom);
    } else {
      this.setState({ noClassnameWarning: "This field is required" });
    }
  }
  render() {
    const selectedClassroom = this.props.selectedClassroom;
    let indexOfClassroom = selectedClassroom.index;
    let header, classnameLabel, nicknameLabel, oldClassroomName, oldNickname;
    if (indexOfClassroom === -1) {
      header = "Create classroom";
      classnameLabel = "Classname (required)";
      nicknameLabel = "Nickname";
      oldClassroomName = "";
      oldNickname = "";
    } else {
      header = "Rename classroom";
      classnameLabel = "Classname";
      nicknameLabel = "Nickname";
      oldClassroomName = selectedClassroom.name;
      oldNickname = selectedClassroom.nickname;
    }
    return (
      <div className="dashboard-popup-background">
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo&family=Overpass:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <div className="dashboard-popup-classname">
          <p>{header}</p>
          <label htmlFor="classname">{classnameLabel}</label>
          <span style={{ color: "#e60000" }}>
            {this.state.noClassnameWarning}
          </span>
          <br></br>
          <input
            type="text"
            id="dashboard-classname"
            name="classname"
            maxLength="40"
            size="20"
            defaultValue={oldClassroomName}
            autoComplete="off"
          ></input>
          <label htmlFor="nickname" id="dashboard-nickname-label">{nicknameLabel}</label>
          <br></br>
          <input
            type="text"
            id="dashboard-nickname"
            name="nickname"
            maxLength="40"
            size="20"
            defaultValue={oldNickname}
            autoComplete="off"
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
            onClick={this.props.toggleRenameClassroomPopup}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default DashboardRenameClassroomPopup;
