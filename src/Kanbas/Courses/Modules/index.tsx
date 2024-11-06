import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import { useState } from "react";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const { role } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <ul id="wd-modules" className="list-group rounded-0">

                {/* Only show ModulesControls to FACULTY */}
                {role === "FACULTY" && (
                    <ModulesControls
                        moduleName={moduleName}
                        setModuleName={setModuleName}
                        addModule={() => {
                            dispatch(addModule({ name: moduleName, course: cid }));
                            setModuleName("");
                        }}
                    />
                )}

                {modules
                    .filter((module: any) => module.course === cid)
                    .map((module: any) => (
                        <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                {!module.editing && module.name}
                                {module.editing && (
                                    <input
                                        className="form-control w-50 d-inline-block"
                                        onChange={(e) =>
                                            dispatch(
                                                updateModule({ ...module, name: e.target.value })
                                            )
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                dispatch(updateModule({ ...module, editing: false }));
                                            }
                                        }}
                                        defaultValue={module.name}
                                    />
                                )}

                                {/* Only show ModuleControlButtons, Status, and Management Buttons to FACULTY */}
                                {role === "FACULTY" && (
                                    <>
                                        <ModuleControlButtons
                                            moduleId={module._id}
                                            deleteModule={(moduleId) => {
                                                dispatch(deleteModule(moduleId));
                                            }}
                                            editModule={(moduleId) => dispatch(editModule(moduleId))}
                                        />

                                        {/* Course Management Buttons */}
                                        <button
                                            className="btn btn-success me-2"
                                            onClick={() => {/* Publish Module Action */}}
                                        >
                                            Publish
                                        </button>
                                        <button
                                            className="btn btn-secondary me-2"
                                            onClick={() => {/* Unpublish Module Action */}}
                                        >
                                            Unpublish
                                        </button>
                                        <button
                                            className="btn btn-info me-2"
                                            onClick={() => {/* Mark as Important Action */}}
                                        >
                                            Important
                                        </button>
                                        <button
                                            className="btn btn-warning me-2"
                                            onClick={() => {/* Disable Module Action */}}
                                        >
                                            Disable
                                        </button>
                                    </>
                                )}
                            </div>

                            {module.lessons && (
                                <ul className="wd-lessons list-group rounded-0">
                                    {module.lessons.map((lesson: any) => (
                                        <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" /> {lesson.name}

                                            {/* Only show LessonControlButtons to FACULTY */}
                                            {role === "FACULTY" && <LessonControlButtons />}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
