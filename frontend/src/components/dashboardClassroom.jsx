import React, { Component } from "react";
import { ReactComponent as VerticalEllipsis } from "../assets/VerticalEllipsis.svg";
import {Link} from "react-router-dom"
import history from '../history';

class DashboardClassroom extends Component {
  handleCardClick = (e) => {
    const targetedElement = e.target;
    const {id, link} = this.props;
    if (
      targetedElement !==
        document.getElementById(
          "renameClassroomOption" + id
        ) &&
      targetedElement !==
        document.getElementById(
          "deleteClassroomOption" + id
        ) &&
      targetedElement !==
        document.getElementById(
          "verticalEllipsisButton" + id
        ) &&
      !document
        .getElementById("verticalEllipsisButton" + id)
        .contains(targetedElement)
    ) {
      history.push(link);
    }
  }
  render() {
    const {
      id,
      name,
      nick,
      classroomOptionsVisible,
      selectedClassroomIndex,
      toggleClassroomOptions,
      toggleRenameClassroomPopup,
      toggleDeleteClassroomPopup,
      link,
    } = this.props;
    return (
      <div className="dashboard-classroom">
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo&family=Overpass:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <div className="dashboard-classroom-top-section" onClick={this.handleCardClick}>
          <Link to={link} className="dashboard-classroom-name">{name}</Link>
          <button
            id={"verticalEllipsisButton" + id}
            className="dashboard-vertical-ellipsis"
            onClick={() => toggleClassroomOptions(id)}
          >
            {<VerticalEllipsis />}
          </button>
          <div className="dashboard-nickname">{nick}</div>
          {classroomOptionsVisible && (
            <ClassroomOptionsDropdown
              toggleRenameClassroomPopup={toggleRenameClassroomPopup}
              toggleDeleteClassroomPopup={toggleDeleteClassroomPopup}
              id={id}
              selectedClassroomIndex={selectedClassroomIndex}
            ></ClassroomOptionsDropdown>
          )}
        </div>
        <div className="dashboard-classroom-bottom-section" onClick={this.handleCardClick}></div>
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
