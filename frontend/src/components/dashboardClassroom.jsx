import React, { Component } from "react";
import { ReactComponent as VerticalEllipsis } from "../assets/VerticalEllipsis.svg";

class DashboardClassroom extends Component {
  render() {
    const {
      id,
      classroomName,
      nickname,
      numOfStudents,
      classroomOptionsVisible,
      selectedClassroomIndex,
      toggleClassroomOptions,
      toggleRenameClassroomPopup,
      toggleDeleteClassroomPopup,
      link,
    } = this.props;
    // console.log("Classroom: " + classroomName + ", number of students: " + numOfStudents)
    return (
      <div className="dashboard-classroom">
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo&family=Overpass:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <div className="dashboard-classroom-top-section">
          <a href={link} className="dashboard-classroom-name">
            {classroomName}
          </a>
          <button
            id={"verticalEllipsisButton" + id}
            className="dashboard-vertical-ellipsis"
            onClick={() => toggleClassroomOptions(id)}
          >
            {<VerticalEllipsis />}
          </button>
          <div className="dashboard-nickname">{nickname}</div>
          {classroomOptionsVisible && (
            <ClassroomOptionsDropdown
              toggleRenameClassroomPopup={toggleRenameClassroomPopup}
              toggleDeleteClassroomPopup={toggleDeleteClassroomPopup}
              id={id}
              selectedClassroomIndex={selectedClassroomIndex}
            ></ClassroomOptionsDropdown>
          )}
        </div>
        <div className="dashboard-classroom-bottom-section">
          {/* <span className="dashboard-students">{numOfStudents} students</span> */}
        </div>
      </div>
    );
  }
}
export default DashboardClassroom;

function ClassroomOptionsDropdown(props) {
  const{id, selectedClassroomIndex, toggleRenameClassroomPopup, toggleDeleteClassroomPopup} = props;
  return (
    <div className="dashboard-classroom-options-dropdown">
      <button
        id={"renameClassroomOption" + id}
        className="dashboard-rename-classroom"
        onClick={() => toggleRenameClassroomPopup(selectedClassroomIndex)}
      >
        Rename classroom
      </button>
      <button
        id={"deleteClassroomOption" + id}
        className="dashboard-delete-classroom"
        onClick={() => toggleDeleteClassroomPopup(selectedClassroomIndex)}
      >
        Delete classroom
      </button>
    </div>
  );
}
