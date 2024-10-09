import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    return (
        <div>
            <div>
                <ModulesControls /><br /><br /><br />
                <ul id="wd-modules" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2 fs-3" />
                                Week 1
                            </div>
                            <ModuleControlButtons />
                        </div>
                        <ul className="wd-lessons list-group rounded-0">
                            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div>
                                    <BsGripVertical className="me-2 fs-3" />
                                    LEARNING OBJECTIVES
                                </div>
                                <LessonControlButtons />
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div>
                                    <BsGripVertical className="me-2 fs-3" />
                                    Introduction to the course
                                </div>
                                <LessonControlButtons />
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div>
                                    <BsGripVertical className="me-2 fs-3" />
                                    Learn what is Web Development
                                </div>
                                <LessonControlButtons />
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div>
                                    <BsGripVertical className="me-2 fs-3" />
                                    LESSON 1
                                </div>
                                <LessonControlButtons />
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div>
                                    <BsGripVertical className="me-2 fs-3" />
                                    LESSON 2
                                </div>
                                <LessonControlButtons />
                            </li>
                        </ul>
                    </li>
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2 fs-3" />
                                Week 2
                            </div>
                            <ModuleControlButtons />
                        </div>
                        <ul className="wd-lessons list-group rounded-0">
                            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div>
                                    <BsGripVertical className="me-2 fs-3" />
                                    LEARNING OBJECTIVES
                                </div>
                                <LessonControlButtons />
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div>
                                    <BsGripVertical className="me-2 fs-3" />
                                    LESSON 1
                                </div>
                                <LessonControlButtons />
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div>
                                    <BsGripVertical className="me-2 fs-3" />
                                    LESSON 2
                                </div>
                                <LessonControlButtons />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}


