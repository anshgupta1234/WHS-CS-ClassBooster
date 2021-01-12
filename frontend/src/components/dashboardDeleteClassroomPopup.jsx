import React, { Component } from "react";

class DashboardDeleteClassroomPopup extends Component {
  render() {
    const {
      deleteClassroom,
      selectedClassroom,
      toggleDeleteClassroomPopup,
    } = this.props;
    return (
      <div className="dashboard-popup-background">
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo&family=Overpass:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <div className="dashboard-popup-delete-classroom">
          <p>Are you sure you want to delete this classroom?</p>
          <div className="dashboard-popup-delete-classroom-warning">
            This action cannot be reversed.
          </div>
          <button
            className="dashboard-popup-delete-classroom-delete"
            onClick={() => deleteClassroom(selectedClassroom.index)}
          >
            Delete
          </button>
          <button
            className="dashboard-popup-delete-classroom-cancel"
            onClick={toggleDeleteClassroomPopup}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default DashboardDeleteClassroomPopup;
