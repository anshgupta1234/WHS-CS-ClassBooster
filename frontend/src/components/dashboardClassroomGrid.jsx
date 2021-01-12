import React, { Component } from "react";
import Classroom from "./dashboardClassroom";

class DashboardClassroomGrid extends Component {
  render() {
    const {
      colPerRow, //each # in this array represents the # of columns in a Row
      maxNumOfColumns,
      classrooms,
      toggleEditClassnamePopup,
      toggleClassroomOptions,
      toggleDeleteClassroomPopup,
    } = this.props;
    let rows = []; //array containing each Row component
    for (let i = 0; i < colPerRow.length; i++) {
      //for number n in the array, add a Row component with n # of columns
      rows.push(
        <Row
          key={i}
          rowNumber={i}
          columns={colPerRow[i]}
          maxNumOfColumns={maxNumOfColumns}
          classrooms={classrooms}
          toggleEditClassnamePopup={toggleEditClassnamePopup}
          toggleClassroomOptions={toggleClassroomOptions}
          toggleDeleteClassroomPopup={toggleDeleteClassroomPopup}
        ></Row>
      );
    }
    return <div>{rows}</div>;
  }
}

export default DashboardClassroomGrid;

function Row(props) {
  let classroomsInThisRow = [];
  let allClassrooms = props.classrooms;
  let rowLength = props.columns;
  let maxNumOfColumns = props.maxNumOfColumns;
  let rowNumber = props.rowNumber;
  for (let i = 0; i < rowLength; i++) {
    classroomsInThisRow.push(
      allClassrooms[rowNumber * maxNumOfColumns + i] // (rowNumber * maxNumOfColumns) + i = index of corresponding classroom in classrooms array
    );
  }
  return (
    <div className="dashboard-classroom-row">
      {classroomsInThisRow.map((classroom) => (
        <Classroom
          key={classroom.index}
          index={classroom.index}
          classroomName={classroom.name}
          nickname={classroom.nickname}
          numOfStudents={classroom.numOfStudents}
          classroomOptionsVisible={classroom.classroomOptionsVisible}
          toggleClassroomOptions={props.toggleClassroomOptions}
          toggleEditClassnamePopup={props.toggleEditClassnamePopup}
          toggleDeleteClassroomPopup={props.toggleDeleteClassroomPopup}
          link={classroom.link}
        ></Classroom>
      ))}
    </div>
  );
}
