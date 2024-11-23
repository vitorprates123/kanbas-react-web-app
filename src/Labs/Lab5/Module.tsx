import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Module() {
    const [module, setModule] = useState({
        id: 1, name : "New Module",
        description: "Default Description",
        course: "Web Development",
    });

    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    return (
        <div id="wd-module">
            <h3>Module </h3>
            <h4>Retrieving Module</h4>
            <a id="wd-retrieve-modules" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a>
            <hr/>
            <h4>Retrieving Module Properties</h4>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a>
            <h4>Modifying Properties</h4>
            <a id="wd-update-module-name"
               className="btn btn-primary float-end"
               href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Name
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                   defaultValue={module.name} onChange={(e) =>
                setModule({...module, name: e.target.value})}/>
            <hr/>

            <a id="wd-update-module-name"
               className="btn btn-primary float-end"
               href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Description
            </a>
            <input className="form-control w-75" id="wd-assignment-description"
                   defaultValue={module.description} onChange={(e) =>
                setModule({...module, description: e.target.value})}/>
            <hr/>

            <hr/>
        </div>
    );
}
