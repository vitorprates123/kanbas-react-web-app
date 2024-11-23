import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a>
            <hr/>
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                   defaultValue={assignment.title} onChange={(e) =>
                setAssignment({...assignment, title: e.target.value})}/>

            <a id="wd-update-assignment-score"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input className="form-control w-75" id="wd-assignment-score" type="number"
                   defaultValue={assignment.score} onChange={(e) =>
                setAssignment({...assignment, score: parseInt(e.target.value)})}/>

            <a id="wd-update-assignment-completed"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Completion
            </a>
            <input className="form-check-input" id="wd-assignment-completed" type="checkbox"
                   checked={assignment.completed} onChange={(e) =>
                setAssignment({...assignment, completed: e.target.checked})}/>

            <hr/>
        </div>
    );
}
