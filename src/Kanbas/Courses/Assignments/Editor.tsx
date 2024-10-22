import React from "react";
import {useParams} from "react-router";
import {assignments} from "../../Database";

export default function AssignmentEditor() {
    const { aid } = useParams();
    const assignment = assignments.find((assignment) => assignment._id === aid);
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <h4 className="mb-4">Assignment Name</h4>
            <input
                id="wd-name"
                value={assignment && assignment.title}
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
                    defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Links to the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page."
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
                            value={100}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="wd-group" className="form-label">
                            Assignment Group
                        </label>
                        <select id="wd-group" className="form-select">
                            <option value="assignments">ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="wd-display-grade-as" className="form-label">
                            Display Grade as
                        </label>
                        <select id="wd-display-grade-as" className="form-select">
                            <option value="Percentage">Percentage</option>
                            <option value="Letter">Letter</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="wd-submission-type" className="form-label">
                            Submission Type
                        </label>
                        <select id="wd-submission-type" className="form-select">
                            <option value="Online">Online</option>
                        </select>
                    </div>
                    <div className="mt-3">
                        <h6 className="mb-3">Online Entry Options</h6>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-website-url" />
                            <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-file-uploads" />
                            <label htmlFor="wd-file-uploads" className="form-check-label">File Uploads</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 mb-3">
                    <h6 className="font-weight-bold">Assign to</h6>
                    <input id="wd-assign-to" value="Everyone" className="form-control" />
                </div>
                <div className="col-md-4 mb-3">
                    <h6 className="font-weight-bold">Due</h6>
                    <input type="date" id="wd-due-date" className="form-control" value="2024-05-13" />
                </div>
                <div className="col-md-4 mb-3">
                    <h6 className="font-weight-bold">Available from</h6>
                    <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
                </div>
                <div className="col-md-4 mb-3">
                    <h6 className="font-weight-bold">Until</h6>
                    <input type="date" id="wd-available-until" className="form-control" value="2024-05-28" />
                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <button id="wd-cancel" className="btn btn-secondary me-2">Cancel</button>
                <button id="wd-save" className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}






