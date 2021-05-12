import React, { Component } from "react";

class DashboardDeleteClassroomPopup extends Component {
  render() {
    const {
      deleteClassroom,
      selectedClassroomIndex,
      toggleDeleteClassroomPopup,
    } = this.props;
    return (
      <div className="dashboard-popup-background">
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo&family=Overpass:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <div className="dashboard-popup-delete-classroom">
          <h1>Are you sure you want to delete this classroom?</h1>
          <div className="dashboard-popup-delete-classroom-warning">
            This action cannot be reversed.
          </div>
          <button
            className="dashboard-popup-delete-classroom-delete"
            onClick={() => deleteClassroom(selectedClassroomIndex)}
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
