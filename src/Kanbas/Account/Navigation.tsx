import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {useLocation} from "react-router";

export function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const active = (path: string) => (pathname.includes(path) ? "active" : "");
    const { pathname } = useLocation();
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
            {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kanbas/Account/Users`} className={`list-group-item text-danger border-0 ${active("Users")}`}> Users </Link> )}
        </div>
    );
}




