import React, { Component } from "react";
import { ReactComponent as VerticalEllipsis } from "../assets/VerticalEllipsis.svg";

class DashboardClassroom extends Component {
  render() {
    const {
      index,
      classroomName,
      nickname,
      numOfStudents,
      classroomOptionsVisible,
      toggleClassroomOptions,
      toggleEditClassnamePopup,
      toggleDeleteClassroomPopup,
      link,
    } = this.props;
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
            id={"verticalEllipsisButton" + index}
            className="dashboard-vertical-ellipsis"
            onClick={() => toggleClassroomOptions(index)}
          >
            {<VerticalEllipsis />}
          </button>
          <div className="dashboard-nickname">{nickname}</div>
          {classroomOptionsVisible && (
            <ClassroomOptionsDropdown
              toggleEditClassnamePopup={toggleEditClassnamePopup}
              toggleDeleteClassroomPopup={toggleDeleteClassroomPopup}
              classroomIndex={index}
            ></ClassroomOptionsDropdown>
          )}
        </div>
        <div className="dashboard-classroom-bottom-section">
          <span className="dashboard-students">{numOfStudents} students</span>
        </div>
      </div>
    );
  }
}
export default DashboardClassroom;

function ClassroomOptionsDropdown(props) {
  return (
    <div className="dashboard-classroom-options-dropdown">
      <button
        id={"editClassnameOption" + props.classroomIndex}
        className="dashboard-edit-classname"
        onClick={() => props.toggleEditClassnamePopup(props.classroomIndex)}
      >
        Edit classname
      </button>
      <button
        id={"deleteClassroomOption" + props.classroomIndex}
        className="dashboard-delete-classroom"
        onClick={() => props.toggleDeleteClassroomPopup(props.classroomIndex)}
      >
        Delete classroom
      </button>
    </div>
  );
}
