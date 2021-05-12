// Sean Le
import React, { Component } from "react";
import DashboardNavbar from "../components/dashboardNavbar";
import DashboardClassroomGrid from "../components/dashboardClassroomGrid";
import DashboardRenameClassroomPopup from "../components/dashboardRenameClassroomPopup";
import DashboardDeleteClassroomPopup from "../components/dashboardDeleteClassroomPopup";
import "../css/Dashboard.css";

export default class Dashboard extends Component {
  state = {
    columnsPerRow: [],
    maxNumOfColumns: 0,
    renameClassroomPopupVisible: false,
    deleteClassroomPopupVisible: false,
    selectedClassroomId: -1,
    classrooms: [],
    findClassnameWidth: "",
    findNicknameWidth: "",
    profileDropdownVisible: false,
    nameInput: "",
    nicknameInput: "",
    isLoaded: true,
  };

  componentDidMount = () => {
    window.addEventListener("resize", () =>
      this.calculateRows(this.state.classrooms)
    );
    document.addEventListener("mousedown", this.handleClick);
    document.body.classList.add("dashboard-noscroll");
    this.getClassrooms();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () =>
      this.calculateRows(this.state.classrooms)
    );
    document.removeEventListener("mousedown", this.handleClick);
    document.body.classList.remove("dashboard-noscroll");
  }

  getClassrooms = () => {
    fetch("http://classbooster.loca.lt/classrooms/getAll", {
      method: "GET",
      headers: {
        'Bypass-Tunnel-Reminder': 'better work',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(response => {
      if (response.success) {
        this.setState({classrooms: response.classrooms, isLoaded: true}, () => this.calculateRows)
      } else {
        console.log("Error: Couldn't get classrooms list")
      }
    })
  }

  handleClick = (e) => {
    const targetedElement = e.target;
    if (this.state.selectedClassroomIndex > -1) {
      //closing classroom options dropdown
      let classrooms = [...this.state.classrooms];
      let selectedClassroomId = {...classrooms[this.state.selectedClassroomIndex]}.id;
      if (
        targetedElement !==
          document.getElementById(
            "renameClassroomOption" + selectedClassroomId
          ) &&
        targetedElement !==
          document.getElementById(
            "deleteClassroomOption" + selectedClassroomId
          ) &&
        targetedElement !==
          document.getElementById(
            "verticalEllipsisButton" + selectedClassroomId
          ) &&
        !document
          .getElementById("verticalEllipsisButton" + selectedClassroomId)
          .contains(targetedElement) &&
        !this.state.renameClassroomPopupVisible &&
        !this.state.deleteClassroomPopupVisible
      ) {
        let selectedClassroom = classrooms[this.state.selectedClassroomIndex];
        selectedClassroom.classroomOptionsVisible = false;
        this.setState({ classrooms, selectedClassroomIndex: -1 });
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

  addClassroom = () => {
    let newClassroomId = "";
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( let i = 0; i < Math.floor((Math.random() * 5)) + 8 ; i++ ) {
        newClassroomId += characters.charAt(Math.floor(Math.random() * 62));
      }
    fetch("http://classbooster.loca.lt/classrooms/add", {
      method: "POST",
      body: {
        id: newClassroomId,
        name: this.state.nameInput,
        nickname: this.state.nicknameInput,
        link: "/editor/?id=" + newClassroomId,
        numberOfStudents: 0,
        classroomOptionsVisible: false,
      },
      headers: {
        'Bypass-Tunnel-Reminder': 'better work'
      }
    }).then(response => response.json()).then(response => {
      if (response.success) {
        this.getClassrooms();
      } else {
        console.log("Error: Classroom not added")
      }
    })
  };

  deleteClassroom = (classroomIndex) => {
    this.toggleDeleteClassroomPopup();
    fetch("http://classbooster.loca.lt/classrooms/delete", {
      method: "POST",
      body: {ID: this.state.classrooms[classroomIndex].id},
      headers: {
        'Bypass-Tunnel-Reminder': 'better work'
      }
    }).then(response => response.json()).then(response => {
      if (response.success) {
        this.getClassrooms();
      } else {
        console.log("Error: Classroom not deleted")
      }
    })
  };

  toggleDeleteClassroomPopup = (selectedClassroomId) => {
    this.setState({deleteClassroomPopupVisible: !this.state.deleteClassroomPopupVisible, selectedClassroomId})
  };

  toggleClassroomOptions = (classroomId) => {
    let classrooms = [...this.state.classrooms];
    let currentClassroomIndex = -1;
    if (classroomId !== -1) {
      for (let i=0; i<classrooms.length; i++) {
        if (classrooms[i].id === classroomId) {
          currentClassroomIndex = i;
        }
      }
      classrooms[currentClassroomIndex].classroomOptionsVisible = !classrooms[currentClassroomIndex].classroomOptionsVisible;
      if (classrooms[currentClassroomIndex].classroomOptionsVisible) {
        this.setState({ classrooms, selectedClassroomIndex: currentClassroomIndex });
      } else {
        this.setState({ classrooms, selectedClassroomIndex: -1 });
      }
    }
  };

  handleInputChange = (e) => {
    let inputTarget = e.target;
    let inputName = inputTarget.name;
    if (inputName === "dashboard-nameInput") {
      this.setState({nameInput: inputTarget.value})
    } else {
      this.setState({nicknameInput: inputTarget.value})
    }
  }

  calculateRows = (newClassroomList) => {
    //calculate how many classrooms can fit in each row, how many rows are needed, and how many classrooms are in the last row since it's not always full
    let classroomTotalWidthInPx = 350;
    let viewportWidth = window.innerWidth - 50; // -50 to allow for a 50px padding on the right side
    if (viewportWidth > classroomTotalWidthInPx) {
      let numOfClassrooms = newClassroomList.length;
      let maxNumOfColumns = Math.floor(viewportWidth / classroomTotalWidthInPx);
      let numOfRows = numOfClassrooms / maxNumOfColumns;
      let numOfFullRows = Math.floor(numOfRows);
      let columnsInLastUncompletedRow = numOfClassrooms - (maxNumOfColumns * numOfFullRows);
      if (
        newClassroomList.length !== this.state.classrooms.length ||
        maxNumOfColumns !== this.state.maxNumOfColumns
      ) {
        let columnsPerRow = []; //each number in this array represents the number of columns/classrooms in a row
        for (let i = 0; i < numOfFullRows; i++) {
          columnsPerRow.push(maxNumOfColumns);
        }
        if (columnsInLastUncompletedRow > 0) {
          columnsPerRow.push(columnsInLastUncompletedRow);
        }
        this.setState(
          {
            classrooms: newClassroomList,
            columnsPerRow: columnsPerRow,
            maxNumOfColumns: maxNumOfColumns,
            selectedClassroomIndex: -1,
          },
          () => this.checkForVerticalScrollbar(columnsPerRow.length)
        );
      }
    }
  };

  checkForVerticalScrollbar(numOfRows) {
    let heightOfClassroom = 320;
    let heightOfRow = heightOfClassroom + 40; //40px is margin-top of row
    let totalHeightNeeded = heightOfRow * numOfRows + 65; //65px is height of navbar
    if (totalHeightNeeded > visualViewport.height) {
      document.getElementById("dashboard-container").style.paddingBottom = "40px";
    } else {
      document.getElementById("dashboard-container").style.paddingBottom = "0px";
    }
  }

  toggleRenameClassroomPopup = (classroomIndex) => {
    if (!this.state.renameClassroomPopupVisible) {
      if (classroomIndex === -1) { //-1 means adding a new classroom
        this.setState({renameClassroomPopupVisible: true, selectedClassroomIndex: classroomIndex, nameInput: "", nicknameInput: ""})
      } else { //else means editing existing classroom name
        const selectedClassroom = this.state.classrooms[classroomIndex];
        this.setState({renameClassroomPopupVisible: true, selectedClassroomIndex: classroomIndex, nameInput: selectedClassroom.name, nicknameInput: selectedClassroom.nickname})
      }
    } else {
      this.setState({renameClassroomPopupVisible: false})
    }
  };

  setClassroomName = (classroomIndex) => {
    let currentClassroom = this.state.classrooms[classroomIndex]
    fetch("http://classbooster.loca.lt/classrooms/rename", {
      method: "POST",
      body: {ID: currentClassroom.id, name: this.state.nameInput.trim(), nickname: this.state.nicknameInput.trim()},
      headers: {
        'Bypass-Tunnel-Reminder': 'better work'
      }
    }).then(response => response.json()).then(response => {
      if (response.success) {
        this.getClassrooms();
      } else {
        console.log("Error: Couldn't rename classroom");
      }
    })
  };

  render() {
    return (
      this.state.isLoaded &&
      <div id="dashboard-container">
        <DashboardNavbar
          toggleRenameClassroomPopup={this.toggleRenameClassroomPopup}
          toggleProfileDropdown={this.toggleProfileDropdown}
          profileDropdownVisible={this.state.profileDropdownVisible}
        ></DashboardNavbar>
        <DashboardClassroomGrid
          columnsPerRow={this.state.columnsPerRow}
          maxNumOfColumns={this.state.maxNumOfColumns}
          classrooms={this.state.classrooms}
          selectedClassroomIndex={this.state.selectedClassroomIndex}
          toggleRenameClassroomPopup={this.toggleRenameClassroomPopup}
          toggleClassroomOptions={this.toggleClassroomOptions}
          toggleDeleteClassroomPopup={this.toggleDeleteClassroomPopup}
        ></DashboardClassroomGrid>
        {this.state.renameClassroomPopupVisible && (
          <DashboardRenameClassroomPopup
            selectedClassroomIndex={this.state.selectedClassroomIndex}
            handleInputChange={this.handleInputChange}
            nameInput={this.state.nameInput}
            nicknameInput={this.state.nicknameInput}
            setClassroomName={this.setClassroomName}
            toggleRenameClassroomPopup={this.toggleRenameClassroomPopup}
            toggleClassroomOptions={this.toggleClassroomOptions}
            addClassroom={this.addClassroom}
          ></DashboardRenameClassroomPopup>
        )}
        {this.state.deleteClassroomPopupVisible && (
          <DashboardDeleteClassroomPopup
            selectedClassroomIndex={this.state.selectedClassroomIndex}
            deleteClassroom={this.deleteClassroom}
            toggleDeleteClassroomPopup={this.toggleDeleteClassroomPopup}
          ></DashboardDeleteClassroomPopup>
        )}
      </div>
    );
  }
}
