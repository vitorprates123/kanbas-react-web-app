import { Link } from "react-router-dom";
import * as db from "./Database";
import React from "react";
export default function Dashboard() {
    const courses = db.courses;
    return(
        <div id="wd-dashboard" className="container-fluid">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row justify-content-start">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                      to={`/Kanbas/Courses/${course._id}/Home`}>
                                    <img src="/images/discrete.jpg" width="100%" height={160}
                                         className="card-img-top"/>
                                    <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                            {course.name}
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text">
                                            {course.description}
                                        </p>
                                        <button className="btn btn-primary">Go</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}