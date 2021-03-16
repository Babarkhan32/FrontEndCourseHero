import React from 'react'
import { Fragment } from 'react';
import { Divider,Timeline } from 'antd';

const DepList=[];
for(let i=1; i<=3; i++){
  DepList.push({
      key:`${i}`,
      name:'Computer Science',
  })};

const DepartmentList=()=>{
    return(
    <Fragment>  
    <h6 className='SubTitle'> Department List </h6>
        <Divider/>
             <Timeline>
                {DepList.map((data)=>(
                    <Timeline.Item dot={data.key} color="#096dd9">
                     {data.name}
                    </Timeline.Item>))}
            </Timeline>

    </Fragment>
    )
}


export default DepartmentList