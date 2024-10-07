export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td align="left" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="assignments">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td align="left" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                            <option value="Letter">Letter</option>
                        </select>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td align="left" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <label htmlFor="wd-points">Online Entry Options</label><br/>

                        <input type="checkbox" name="text-entry" id="wd-text-entry"/>
                        <label htmlFor="wd-text-entry">Text Entry</label><br/>

                        <input type="checkbox" name="website-url" id="wd-website-url"/>
                        <label htmlFor="wd-webstie-url">Website URL</label><br/>

                        <input type="checkbox" name="media-recordings" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                        <input type="checkbox" name="student-annotation"
                               id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                        <input type="checkbox" name="file-uploads" id="wd-file-uploads"/>
                        <label htmlFor="wd-file-uploads">File Uploads</label><br/>

                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label><br/>
                        <input id="wd-assign-to" value="Everyone"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="wd-due-date">Due</label><br/>
                        <input type= "date" id="wd-due-date" value="2024-05-13"/>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <label htmlFor="wd-available-from">Available from</label><br />
                        <input type="date" id="wd-available-from" value="2024-05-06"/>
                    </td>
                    <td align="center">
                        <label htmlFor="wd-available-until"> Until</label><br />
                        <input type="date" id="wd-available-until" value="2024-05-28"/>
                    </td>

                </tr>
                <br />
                <tr>
                    <td align="right" valign="bottom">
                        <button id="wd-cancel">Cancel</button>
                        <button id="wd-save">Save</button>
                    </td>
                </tr>


            </table>
        </div>
    );
}

