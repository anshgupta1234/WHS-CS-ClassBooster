import React, { Component } from 'react';

class EditorDeleteStudentPopup extends Component {
    render() {
        const {students, selectedStudentId, deleteStudent, toggleDeleteStudentPopup} = this.props;
        return ( 
            <div className="dashboard-popup-background">
                <div className="dashboard-popup-delete-classroom">
                    <h1>Delete {students[selectedStudentId].name} from your students list?</h1>
                    <h2 className="dashboard-popup-delete-classroom-warning">This action cannot be reversed</h2>
                    <button className="dashboard-popup-delete-classroom-delete" onClick={() => deleteStudent(selectedStudentId)}>Delete</button>
                    <button className="dashboard-popup-delete-classroom-cancel" onClick={toggleDeleteStudentPopup}>Cancel</button>
                </div>
            </div>
         );
    }
}
 
export default EditorDeleteStudentPopup;