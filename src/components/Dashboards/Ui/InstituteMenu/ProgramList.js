import React from 'react'
import { Fragment } from 'react';
import { Divider,Timeline } from 'antd';

const ProgList=[];
for(let i=1; i<=3; i++){
  ProgList.push({
      key:`${i}`,
      name:'Bachelors of Computer Science',
  })};

const ProgramList=()=>{
    return(
<Fragment>
<h6 className='SubTitle'> Program List </h6>
                            <Divider/>
                            <Timeline>
                                {ProgList.map((data)=>(
                                  <Timeline.Item dot={data.key} color="#096dd9">
                                    {data.name}
                                  </Timeline.Item>
                                ))}
                            </Timeline>

</Fragment>
    )
}

export default ProgramList