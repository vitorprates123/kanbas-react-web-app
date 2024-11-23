import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import * as coursesClient from "../client";
import {addAssignment, setAssignments, updateAssignment} from "./reducer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addModule, updateModule} from "../Modules/reducer";
import * as assignmentsClient from "./client";
// import {assignments} from "../../Database";

export default function AssignmentEditor() {
    const { aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cid } = useParams() as { cid: string };
    const [assignmentTitle, setAssignmentTitle] = useState("");
    const [assignmentDescription, setAssignmentDescription] = useState("");
    const [assignmentPoints, setAssignmentPoints] = useState(100);
    const [assignmentDueDate, setAssignmentDueDate] = useState("");
    const [assignmentAvailableFrom, setAssignmentAvailableFrom] = useState("2024-05-06");
    const [assignmentAvailableUntil, setAssignmentAvailableUntil] = useState("2024-05-28");

    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
        if (assignment) {
            setAssignmentTitle(assignment.title);
            setAssignmentDescription(assignment.description);
            setAssignmentPoints(assignment.points);
            setAssignmentDueDate(assignment.dueDate);
            setAssignmentAvailableFrom(assignment.availableFrom);
            setAssignmentAvailableUntil(assignment.availableUntil);
        }
    }, []);
    const assignment = assignments.find((assignment: any) => assignment._id === aid);

    const createAssignmentForCourse = async () => {
        if (!aid) return;
        const newAssignment = { _id: "new", title: assignmentTitle, course: cid,
            availableFrom: assignmentAvailableFrom, availableUntil: assignmentAvailableUntil,
        dueDate: assignmentDueDate, points: assignmentPoints, description: assignmentDescription};
        const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
        dispatch(addAssignment(assignment));
    };

    const saveAssignment = async () => {
        if (!assignment) return;
        const updatedAssignment = {
            ...assignment,
            title: assignmentTitle,
            description: assignmentDescription,
            points: assignmentPoints,
            dueDate: assignmentDueDate,
            availableFrom: assignmentAvailableFrom,
            availableUntil: assignmentAvailableUntil,
        };
        await assignmentsClient.updateAssignment(updatedAssignment);
        dispatch(updateAssignment(updatedAssignment));
    };

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <h4 className="mb-4">Assignment Name</h4>
            <input
                id="wd-name"
                value={assignmentTitle}
                onChange={(e) => setAssignmentTitle(e.target.value)}
                className="form-control mb-3"

            />

            <div className="mb-4">
                <label htmlFor="wd-description" className="form-label">
                    Description
                </label>
                <textarea
                    id="wd-description"
                    className="form-control"
                    rows={5}
                    value={assignment ? assignment.description : assignmentDescription}
                    onChange={(e) => setAssignmentDescription(e.target.value)}
                />
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="wd-points" className="form-label">
                            Points
                        </label>
                        <input
                            id="wd-points"
                            type="number"
                            value={assignment ? assignment.points : assignmentPoints}
                            onChange={(e) => setAssignmentPoints(Number(e.target.value))}
                            className="form-control"
                        />
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-4 mb-3">
                    <h6 className="font-weight-bold">Due</h6>
                    <input type="date" id="wd-due-date" className="form-control" value={assignment ? assignment.dueDate : assignmentDueDate}
                           onChange={(e) => setAssignmentDueDate(e.target.value)} />
                </div>
                <div className="col-md-4 mb-3">
                    <h6 className="font-weight-bold">Available from</h6>
                    <input type="date" id="wd-available-from" className="form-control" value={assignment ? assignment.availableFrom : assignmentAvailableFrom}
                           onChange={(e) => setAssignmentAvailableFrom(e.target.value)} />
                </div>
                <div className="col-md-4 mb-3">
                    <h6 className="font-weight-bold">Until</h6>
                    <input type="date" id="wd-available-until" className="form-control" value={assignment ? assignment.availableUntil : assignmentAvailableUntil}
                           onChange={(e) => setAssignmentAvailableUntil(e.target.value)} />
                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <button id="wd-cancel" className="btn btn-secondary me-2"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}>Cancel
                </button>
                <button id="wd-save" className="btn btn-danger"
                        onClick={async () => {
                            if (aid !== "new") {
                                await saveAssignment();
                            } else {
                                await createAssignmentForCourse();
                            }
                            navigate(`/Kanbas/Courses/${cid}/Assignments`);
                        }}>Save
                </button>
            </div>
        </div>
    );
}
