import { FaPlus, FaSearch, FaGripVertical, FaEllipsisV } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function Assignments() {
    return (
        <div id="wd-assignments" className="p-3">
            {/* Top controls: Search, Group, and Assignment buttons */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center">
                    <FaSearch className="me-2 text-muted" />
                    <input
                        id="wd-search-assignment"
                        placeholder="Search..."
                        className="form-control"
                        style={{ width: "250px" }}
                    />
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-secondary me-2">
                        <FaPlus className="me-1" /> Group
                    </button>
                    <button className="btn btn-danger">
                        <FaPlus className="me-1" /> Assignment
                    </button>
                </div>
            </div>

            {/* Assignments header */}
            <div className="d-flex justify-content-between align-items-center mb-3 bg-light p-3">
                <h4 className="fw-bold mb-0" style={{ fontSize: "1.5rem" }}>
                    Assignments
                </h4>
                <div className="d-flex align-items-center">
                    <span className="badge rounded-pill bg-light border me-2 px-3 py-2 text-dark">
                        40% of Total <BsPlus className="ms-1" />
                    </span>
                    <FaEllipsisV />
                </div>
            </div>

            {/* Assignment list */}
            <ul id="wd-assignment-list" className="list-group">
                <li className="wd-assignment-list-item list-group-item p-3 d-flex justify-content-between align-items-center" style={{ borderLeft: "10px solid green" }}>
                    <div className="d-flex align-items-center">
                        <FaGripVertical className="me-2 fs-5 text-muted" />
                        <div>
                            <a className="fw-bold d-block text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Assignments/123">
                                A1 - ENV + HTML
                            </a>
                            <small className="text-muted">
                                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts
                            </small>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <GreenCheckmark />
                        <FaEllipsisV className="ms-2" />
                    </div>
                </li>
                <li className="wd-assignment-list-item list-group-item p-3 d-flex justify-content-between align-items-center" style={{ borderLeft: "10px solid green" }}>
                    <div className="d-flex align-items-center">
                        <FaGripVertical className="me-2 fs-5 text-muted" />
                        <div>
                            <a className="fw-bold d-block text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Assignments/456">
                                A2 - CSS + BOOTSTRAP
                            </a>
                            <small className="text-muted">
                                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts
                            </small>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <GreenCheckmark />
                        <FaEllipsisV className="ms-2" />
                    </div>
                </li>
                <li className="wd-assignment-list-item list-group-item p-3 d-flex justify-content-between align-items-center" style={{ borderLeft: "10px solid green" }}>
                    <div className="d-flex align-items-center">
                        <FaGripVertical className="me-2 fs-5 text-muted" />
                        <div>
                            <a className="fw-bold d-block text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Assignments/678">
                                A3 - Javascript + REACT
                            </a>
                            <small className="text-muted">
                                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts
                            </small>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <GreenCheckmark />
                        <FaEllipsisV className="ms-2" />
                    </div>
                </li>
            </ul>
        </div>
    );
}





