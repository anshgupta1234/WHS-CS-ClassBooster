import React, { Component } from "react";
import Classroom from "./dashboardClassroom";

class DashboardClassroomGrid extends Component {
  render() {
    const {
      columnsPerRow, //each # in this array represents the # of columns in a Row
      maxNumOfColumns,
      classrooms,
      selectedClassroomIndex,
      toggleRenameClassroomPopup,
      toggleClassroomOptions,
      toggleDeleteClassroomPopup,
    } = this.props;
    let rows = [];
    for (let i = 0; i < columnsPerRow.length; i++) {
      rows.push(
        <Row
          key={i}
          rowNumber={i}
          columns={columnsPerRow[i]}
          maxNumOfColumns={maxNumOfColumns}
          selectedClassroomIndex={selectedClassroomIndex}
          classrooms={classrooms}
          toggleRenameClassroomPopup={toggleRenameClassroomPopup}
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
  let {classrooms, columns, maxNumOfColumns, rowNumber, selectedClassroomIndex} = props;
  let classroomsInThisRow = [];
  for (let i = 0; i < columns; i++) {
    classroomsInThisRow.push(
      classrooms[rowNumber * maxNumOfColumns + i] // (rowNumber * maxNumOfColumns) + i = index of corresponding classroom in classrooms array
    );
  }
  return (
    <div className="dashboard-classroom-row">
      {classroomsInThisRow.map((classroom) => (
        <Classroom
          key={classroom.tag}
          id={classroom.tag}
          classroomName={classroom.name}
          nickname={classroom.nick}
          selectedClassroomIndex={selectedClassroomIndex}
          numOfStudents={classroom.numOfStudents}
          classroomOptionsVisible={classroom.classroomOptionsVisible}
          toggleClassroomOptions={props.toggleClassroomOptions}
          toggleRenameClassroomPopup={props.toggleRenameClassroomPopup}
          toggleDeleteClassroomPopup={props.toggleDeleteClassroomPopup}
          link={classroom.link}
        ></Classroom>
      ))}
    </div>
  );
}
