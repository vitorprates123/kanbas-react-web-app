import { Link } from "react-router-dom";
import {AiOutlineDashboard} from "react-icons/ai";
import {FaRegCircleUser} from "react-icons/fa6";
import {FaInbox} from "react-icons/fa";
import {LiaBookSolid, LiaCogSolid} from "react-icons/lia";
import {IoCalendarOutline} from "react-icons/io5";
import "./index.css";
export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" style={{ width: 115 }}
             className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a id="wd-neu-link" target="_blank"
               href="https://www.northeastern.edu/"
               className="list-group-item bg-black border-0 text-center">
                <img src="/images/NU_RGB_Notched-N_motto_RW.png" width="75px" alt="Northeastern" />
            </a>

            <Link to="/Kanbas/Account" id="wd-account-link"
                  className="list-group-item text-center border-0 bg-black text-white">
                <FaRegCircleUser className="fs-1 text-white" /><br />
                Account
            </Link>

            <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
                  className="list-group-item text-center border-0 bg-black text-danger active">
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard
            </Link>

            <Link to="/Kanbas/Courses/1234/Home" id="wd-course-link"
                  className="list-group-item text-center border-0 bg-black text-danger">
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses
            </Link>

            <Link to="/Kanbas/Calendar" id="wd-calendar-link"
                  className="list-group-item text-center border-0 bg-black text-danger">
                <IoCalendarOutline className="fs-1 text-danger" /><br />
                Calendar
            </Link>

            <Link to="/Kanbas/Inbox" id="wd-inbox-link"
                  className="list-group-item text-center border-0 bg-black text-danger">
                <FaInbox className="fs-1 text-danger" /><br />
                Inbox
            </Link>

            <Link to="/Labs" id="wd-labs-link"
                  className="list-group-item text-center border-0 bg-black text-danger">
                <LiaCogSolid className="fs-1 text-danger" /><br />
                Labs
            </Link>

        </div>
    );
}
