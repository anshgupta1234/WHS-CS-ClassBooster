// Sean Le
import React, { Component, useState } from "react";
import DashboardNavbar from "../components/dashboardNavbar";
import DashboardClassroomGrid from "../components/dashboardClassroomGrid";
import DashboardEditClassnamePopup from "../components/dashboardEditClassnamePopup";
import DashboardDeleteClassroomPopup from "../components/dashboardDeleteClassroomPopup";
import "../css/Dashboard.css";

export default class Dashboard extends Component {
  state = {
    colPerRow: [],
    maxNumOfColumns: 0,
    editClassnamePopup: { show: false, indexOfClassroom: 0 },
    deleteClassroomPopup: { show: false, indexOfClassroom: 0 },
    classroomWithOptionsOn: -1,
    classrooms: [],
    findClassnameWidth: "",
    findNicknameWidth: "",
    profileDropdownVisible: false,
  };

  componentDidMount() {
    window.addEventListener("resize", () =>
      this.calculateRows(this.state.classrooms)
    );
    document.addEventListener("mousedown", this.handleClick);
    document.body.classList.add("noscroll");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () =>
      this.calculateRows(this.state.classrooms)
    );
    document.removeEventListener("mousedown", this.handleClick);
    document.body.classList.remove("noscroll");
  }

  handleClick = (e) => {
    let classroomWithOptionsOn = this.state.classroomWithOptionsOn;
    const targetedElement = e.target;
    if (classroomWithOptionsOn > -1) {
      //closing classroom options dropdown
      let classrooms = [...this.state.classrooms];
      if (
        targetedElement !==
          document.getElementById(
            "editClassnameOption" + classroomWithOptionsOn
          ) &&
        targetedElement !==
          document.getElementById(
            "deleteClassroomOption" + classroomWithOptionsOn
          ) &&
        targetedElement !==
          document.getElementById(
            "verticalEllipsisButton" + classroomWithOptionsOn
          ) &&
        !document
          .getElementById("verticalEllipsisButton" + classroomWithOptionsOn)
          .contains(e.target) &&
        this.state.editClassnamePopup.show !== true &&
        this.state.deleteClassroomPopup.show !== true
      ) {
        classrooms[classroomWithOptionsOn].classroomOptionsVisible = false;
        this.setState({ classrooms, classroomWithOptionsOn: -1 });
      }
    }
    if (this.state.profileDropdownVisible) {
      //closing profile dropdown in navbar
      if (
        targetedElement !== document.getElementById("dashboard-profile") &&
        !document
          .getElementById("dashboard-profile")
          .contains(targetedElement) &&
        !document
          .getElementById("dashboard-profile-dropdown")
          .contains(targetedElement)
      ) {
        this.setState({ profileDropdownVisible: false });
      }
    }
  };

  toggleProfileDropdown = () => {
    this.setState({
      profileDropdownVisible: !this.state.profileDropdownVisible,
    });
  };

  addClassroom = (classroomName, nickname) => {
    let classrooms = [...this.state.classrooms];
    classrooms.push({
      index: classrooms.length, //index of classroom is its index in the classroom array
      name: classroomName,
      nickname: nickname,
      numOfStudents: 0,
      classroomOptionsVisible: false,
      link: "#",
    });
    this.calculateRows(classrooms);
  };

  deleteClassroom = (indexOfClassroom) => {
    this.toggleDeleteClassroomPopup();
    let classrooms = this.state.classrooms.filter(
      (classroom) => classroom.index !== indexOfClassroom
    );
    this.updateClassroomIndexes(indexOfClassroom, classrooms);
  };

  toggleDeleteClassroomPopup = (indexOfClassroom) => {
    let deleteClassroomPopup = this.state.deleteClassroomPopup;
    deleteClassroomPopup.show = !deleteClassroomPopup.show;
    deleteClassroomPopup.indexOfClassroom = indexOfClassroom;
    this.setState({ deleteClassroomPopup });
  };

  updateClassroomIndexes(changedIndex, newClassroomList) {
    //when the order of classrooms changes, this function updates their index property to match their index in classrooms array
    //changedIndex is the first index in the classrooms array where the order of classrooms changes, all classrooms after that must update their index property
    for (let i = changedIndex; i < newClassroomList.length; i++) {
      newClassroomList[i].index = i;
    }
    this.calculateRows(newClassroomList);
  }

  toggleClassroomOptions = (indexOfClassroom) => {
    let classrooms = [...this.state.classrooms];
    if (indexOfClassroom > -1) {
      classrooms[indexOfClassroom].classroomOptionsVisible = !classrooms[
        indexOfClassroom
      ].classroomOptionsVisible;
      if (classrooms[indexOfClassroom].classroomOptionsVisible) {
        this.setState({ classrooms, classroomWithOptionsOn: indexOfClassroom });
      } else {
        this.setState({ classrooms, classroomWithOptionsOn: -1 });
      }
    }
  };

  calculateRows = (newClassroomList) => {
    //calculate how many classrooms can fit in each row, how many rows are needed, and how many classrooms are in the last row since it's not always full
    let classroomTotalWidthInPx = 360;
    let viewportWidth = window.innerWidth - 50; // -50 to allow for a 50px padding on the right side
    if (viewportWidth > classroomTotalWidthInPx) {
      let numOfClassrooms = newClassroomList.length;
      let maxNumOfColumns = Math.floor(viewportWidth / classroomTotalWidthInPx);
      let numOfRows = numOfClassrooms / maxNumOfColumns;
      let numOfFullRows = Math.floor(numOfRows);
      let columnsInLastUncompletedRow =
        numOfRows - numOfFullRows > 0
          ? numOfClassrooms - maxNumOfColumns * numOfFullRows
          : 0;
      if (
        newClassroomList.length !== this.state.classrooms.length ||
        maxNumOfColumns !== this.state.maxNumOfColumns
      ) {
        this.addRowsToState(
          newClassroomList,
          maxNumOfColumns,
          numOfFullRows,
          columnsInLastUncompletedRow
        );
      }
    }
  };

  addRowsToState = (
    newClassroomList,
    maxNumOfColumns,
    numOfFullRows,
    colInUncompletedRow
  ) => {
    let rowsArray = []; //each number in this array represents the number of columns/classrooms in a row
    for (let i = 0; i < numOfFullRows; i++) {
      rowsArray.push(maxNumOfColumns);
    }
    if (colInUncompletedRow > 0) {
      rowsArray.push(colInUncompletedRow);
    }
    this.setState(
      {
        classrooms: newClassroomList,
        colPerRow: rowsArray,
        maxNumOfColumns: maxNumOfColumns,
        classroomWithOptionsOn: -1,
      },
      () => this.checkForVerticalScrollbar(rowsArray.length)
    );
  };

  checkForVerticalScrollbar(numOfRows) {
    let heightOfClassroom = 320;
    let heightOfRow = heightOfClassroom + 40; //40px is margin-top of row
    let totalHeightNeeded = heightOfRow * numOfRows + 65; //65px is height of navbar
    if (totalHeightNeeded > visualViewport.height) {
      document.getElementById("dashboard-page").style.paddingBottom = "40px";
    } else {
      document.getElementById("dashboard-page").style.paddingBottom = "0px";
    }
  }

  toggleEditClassnamePopup = (indexOfClassroom) => {
    let editClassnamePopup = this.state.editClassnamePopup;
    editClassnamePopup.show = !editClassnamePopup.show;
    editClassnamePopup.indexOfClassroom = indexOfClassroom;
    this.setState({
      editClassnamePopup,
    });
  };

  setClassroomName = (indexOfClassroom, classroomName, nickname) => {
    classroomName = classroomName.trim();
    nickname = nickname.trim();
    this.toggleEditClassnamePopup();
    if (indexOfClassroom === -1) {
      //index of -1 means a new classroom
      this.addClassroom(classroomName, nickname);
    } else {
      let classrooms = [...this.state.classrooms];
      classrooms[indexOfClassroom].name = classroomName;
      classrooms[indexOfClassroom].nickname = nickname;
      this.setState({ classrooms });
    }
  };

  render() {
    return (
      <div id="dashboard-page">
        <DashboardNavbar
          toggleEditClassnamePopup={this.toggleEditClassnamePopup}
          toggleProfileDropdown={this.toggleProfileDropdown}
          profileDropdownVisible={this.state.profileDropdownVisible}
        ></DashboardNavbar>
        <DashboardClassroomGrid
          colPerRow={this.state.colPerRow}
          maxNumOfColumns={this.state.maxNumOfColumns}
          classrooms={this.state.classrooms}
          toggleEditClassnamePopup={this.toggleEditClassnamePopup}
          toggleClassroomOptions={this.toggleClassroomOptions}
          toggleDeleteClassroomPopup={this.toggleDeleteClassroomPopup}
        ></DashboardClassroomGrid>
        {this.state.editClassnamePopup.show && (
          <DashboardEditClassnamePopup
            selectedClassroom={
              this.state.editClassnamePopup.indexOfClassroom > -1
                ? this.state.classrooms[
                    this.state.editClassnamePopup.indexOfClassroom
                  ]
                : { index: -1 }
            }
            setClassroomName={this.setClassroomName}
            toggleEditClassnamePopup={this.toggleEditClassnamePopup}
            toggleClassroomOptions={this.toggleClassroomOptions}
          ></DashboardEditClassnamePopup>
        )}
        {this.state.deleteClassroomPopup.show && (
          <DashboardDeleteClassroomPopup
            selectedClassroom={
              this.state.classrooms[
                this.state.deleteClassroomPopup.indexOfClassroom
              ]
            }
            deleteClassroom={this.deleteClassroom}
            toggleDeleteClassroomPopup={this.toggleDeleteClassroomPopup}
          ></DashboardDeleteClassroomPopup>
        )}
      </div>
    );
  }
}
