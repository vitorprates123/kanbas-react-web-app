import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div id="wd-signup-screen" className="container mt-4">
            <h3 className="mb-3">Sign Up</h3>
            <form>
                <div className="mb-3">
                    <input
                        placeholder="Username"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input
                        placeholder="Password"
                        type="password"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input
                        placeholder="Verify Password"
                        type="password"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <Link
                        to="/Kanbas/Account/Profile"
                        className="btn btn-primary w-100"
                    >
                        Sign up
                    </Link>
                </div>
                <div className="mb-3 text-center">
                    <Link to="/Kanbas/Account/Signin" className="text-decoration-none">
                        Already have an account? Sign in
                    </Link>
                </div>
            </form>
        </div>
    );
}


