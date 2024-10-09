
import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div id="wd-dashboard" className="container-fluid">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row justify-content-start">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/discrete.jpg" width="100%" height={160} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 1800
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Discrete Mathematics - Fall 2023, Section 1
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/fundies.jpg" width="100%" height={160} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 1000
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS Fundamentals - Spring 2023, Section 2
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/fundies2.jpg" width="100%" height={160} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 1200
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS Fundamentals 2 - Fall 2023, Section 3
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/databasedesign.jpg" width="100%" height={160} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 3000
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Database Design - Spring 2023, Section 1
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/calculus.jpg" width="100%" height={160} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MATH 1000
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Calculus 1 - Fall 2023, Section 4
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/macroeconomics.jpg" width="100%" height={160} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        ECON 2000
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Intro to Macroeconomics - Spring 2024, Section 1
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/calculus2.jpg" width="100%" height={160} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MATH 2000
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Calculus 2 - Fall 2024, Section 3
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
