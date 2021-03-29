import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import CreateUi from '../Ui/CreateUi';
import insertCourse from './../api/insertCourse';
import { message } from 'antd';
const Create = (props) => {
    const [resume, setResume] = useState('');
    const [loader,setLoader] = useState(false);
    const onFinish = (data) => {
        setLoader(true)
        data.facultyResume = resume;
        data.status=1;
        data.owner_type=0;
        insertCourse(data).then(result => {
            console.log("Result", result);
            setLoader(false)
            message.success('Course Created Succesfully')
        })
    }

    return (
        <CreateUi
            onFinish={onFinish}
            setResume={setResume}
            resume={resume}
            load={loader} firstLoadHook={setLoader}
        />
    )

}
export default withRouter(Create)