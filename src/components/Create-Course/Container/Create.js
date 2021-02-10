import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import CreateUi from '../Ui/CreateUi';
import insertCourse from './../api/insertCourse';

const Create = (props) => {
    const [resume, setResume] = useState('')
    const onFinish = (data) => {
        data.facultyResume = resume;
        data.status=1;
        data.owner_type=0;
        insertCourse(data).then(result => {
            console.log("Result", result);
            alert("Course inserted Successfully")
        })
    }

    return (
        <CreateUi
            onFinish={onFinish}
            setResume={setResume}
            resume={resume}
        />
    )

}
export default withRouter(Create)