import React from 'react';
import FacultyRegUi from '../Ui/FacultyRegUi';

const FacultyReg=()=>{

    const onFinish=(values)=>{
            console.log("Container",values)
    }
    return <FacultyRegUi onFinish={onFinish}/>
}
export default FacultyReg