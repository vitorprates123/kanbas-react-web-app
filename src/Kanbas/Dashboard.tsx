import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as db from "./Database";
import { enroll, unenroll, toggleEnrollmentView } from "./Account/reducer";

export default function Dashboard({
                                      courses, course, setCourse, addNewCourse,
                                      deleteCourse, updateCourse
                                  }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {
    const { currentUser, enrollmentsViewAll } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isEnrolled = (courseId: string) => {
        return enrollments.some((enrollment) => enrollment.user === currentUser._id && enrollment.course === courseId);
    };

    const handleEnroll = (courseId: string) => {
        dispatch(enroll({ userId: currentUser._id, courseId }));
    };

    const handleUnenroll = (courseId: string) => {
        dispatch(unenroll({ userId: currentUser._id, courseId }));
    };

    const handleToggleView = () => {
        dispatch(toggleEnrollmentView());
    };

    return (
        <div id="wd-dashboard" className="container-fluid">
            <h1 id="wd-dashboard-title">Dashboard</h1>

            {/* Control Section */}
            <>
                <h5>New Course
                    <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}> Add </button>
                    <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                        Update
                    </button>
                </h5>
                <br />
                <input value={course.name} className="form-control mb-2"
                       onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <textarea value={course.description} className="form-control"
                          onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                <hr />
            </>

            {/* Enrollments Toggle */}
            <button className="btn btn-primary float-end" onClick={handleToggleView}>
                {enrollmentsViewAll ? "View My Enrollments" : "View All Courses"}
            </button>

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row justify-content-start">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {courses
                        .filter((course) => enrollmentsViewAll || isEnrolled(course._id))
                        .map((course) => (
                            <div key={course._id} className="wd-dashboard-course col" style={{ width: "260px" }}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link
                                        className="wd-dashboard-course-link text-decoration-none text-dark"
                                        to={`/Kanbas/Courses/${course._id}/Home`}
                                    >
                                        <img src="/images/discrete.jpg" width="100%" height={160}
                                             className="card-img-top" alt="Course" />
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

                                    {/* Course Management Buttons */}
                                    <div className="card-body">
                                        <button onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }} className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                            Delete
                                        </button>
                                        <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end">
                                            Edit
                                        </button>
                                    </div>

                                    {/* Enrollment Buttons */}
                                    <div className="card-body">
                                        {isEnrolled(course._id) ? (
                                            <button
                                                className="btn btn-danger w-100"
                                                onClick={() => handleUnenroll(course._id)}
                                            >
                                                Unenroll
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-success w-100"
                                                onClick={() => handleEnroll(course._id)}
                                            >
                                                Enroll
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}



