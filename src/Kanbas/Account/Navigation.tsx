import { Link } from "react-router-dom";

export function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
            <Link
                to="/Kanbas/Account/Signin"
                id="wd-account-signin-link"
                className="list-group-item text-danger border-0"
            >
                Signin
            </Link>
            <Link
                to="/Kanbas/Account/Signup"
                id="wd-account-signup-link"
                className="list-group-item text-danger border-0"
            >
                Signup
            </Link>
            <Link
                to="/Kanbas/Account/Profile"
                id="wd-account-profile-link"
                className="list-group-item text-danger border-0"
            >
                Profile
            </Link>
        </div>
    );
}




