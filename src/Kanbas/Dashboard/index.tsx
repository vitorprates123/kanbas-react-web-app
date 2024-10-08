import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="images/discrete.jpg" alt="discrete" width={200}/>
                        <div>
                            <h5>
                                CS 1800
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Discrete Mathematics
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="images/fundies.jpg" alt="fundies" width={200}/>
                        <div>
                            <h5>
                                CS 1000
                            </h5>
                            <p className="wd-dashboard-course-title">
                                CS Fundamentals
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/fundies2.jpg" alt="fundies2" width={200}/>
                        <div>
                            <h5>
                                CS 1200
                            </h5>
                            <p className="wd-dashboard-course-title">
                                CS Fundamentals 2
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/databasedesign.jpg" alt="database design" width={200}/>
                        <div>
                            <h5>
                                CS 3000
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Database Design
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                    <div className="wd-dashboard-course">
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            <img src="/images/calculus.jpg" alt="calculus" width={200}/>
                            <div>
                                <h5>
                                    MATH 1000
                                </h5>
                                <p className="wd-dashboard-course-title">
                                    Calculus 1
                                </p>
                                <button> Go</button>
                            </div>
                        </Link>
                    </div>
                    <div className="wd-dashboard-course">
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            <img src="/images/macroeconomics.jpg" alt="macroeconomics" width={200}/>
                            <div>
                                <h5>
                                    ECON 2000
                                </h5>
                                <p className="wd-dashboard-course-title">
                                    Intro to Macroeconomics
                                </p>
                                <button> Go</button>
                            </div>
                        </Link>
                    </div>
                    <div className="wd-dashboard-course">
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            <img src="/images/calculus2.jpg" alt="calculus2" width={200}/>
                            <div>
                                <h5>
                                    MATH 2000
                                </h5>
                                <p className="wd-dashboard-course-title">
                                    Calculus 2
                                </p>
                                <button> Go</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
