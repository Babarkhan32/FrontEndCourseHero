import React,{useState} from 'react';
import { withRouter } from 'react-router-dom';

import CreateUi from '../Ui/CreateUi';
import insertCourse from './../api/insertCourse';

const Create=(props)=>{
    const[facResume,setResume]=useState('')
const onFinish=(data)=>{
    data.facultyResume=facResume;
        insertCourse(data).then(result=>{
            console.log("Result",result);
            alert("Course inserted Successfully")
        })
    }
   
 return(
        <CreateUi   
        onFinish={onFinish}
        setResume={setResume}
        />
    )

}
export default withRouter(Create)