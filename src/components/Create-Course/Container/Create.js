import React,{useState} from 'react';
import { withRouter } from 'react-router-dom';

import CreateUi from '../Ui/CreateUi';
import insertCourse from './../api/insertCourse';

const Create=(props)=>{
const onFinish=(data)=>{
        insertCourse(data).then(result=>{
            console.log("Result",result);
            alert("Course inserted Successfully")
        })
    }
   
 return(
        <CreateUi   onFinish={onFinish}/>
    )

}
export default withRouter(Create)