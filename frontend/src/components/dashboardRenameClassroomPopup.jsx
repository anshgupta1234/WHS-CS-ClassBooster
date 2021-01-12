import React, { Component } from "react";

class DashboardRenameClassroomPopup extends Component {
  state = { noClassnameWarning: "" };
  checkInputs() {
    let indexOfClassroom = this.props.selectedClassroom.index;
    if (document.getElementById("classname").value.trim().length > 0) {
      this.props.setClassroomName(
        indexOfClassroom,
        document.getElementById("classname").value,
        document.getElementById("nickname").value
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
      header = "Choose classname and nickname";
      classnameLabel = "Choose a classname (required)";
      nicknameLabel = "Choose a nickname (optional)";
      oldClassroomName = "";
      oldNickname = "";
    } else {
      header = "Rename classroom";
      classnameLabel = "Choose a classname";
      nicknameLabel = "Choose a nickname";
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
            id="classname"
            name="classname"
            maxLength="40"
            size="30"
            defaultValue={oldClassroomName}
            autoComplete="off"
          ></input>
          <label htmlFor="nickname">{nicknameLabel}</label>
          <br></br>
          <input
            type="text"
            id="nickname"
            name="nickname"
            maxLength="40"
            size="30"
            defaultValue={oldNickname}
            autoComplete="off"
          ></input>
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
