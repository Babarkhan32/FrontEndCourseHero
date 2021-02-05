import React from 'react'
import { Fragment } from 'react'
import { Descriptions,Divider,Carousel,Timeline, Typography,Avatar } from 'antd';

const List=[];
for(let i=1; i<=3; i++){
  List.push({
      key:`${i}`,
      name:'Nust EME',
  })};

const CampusList=()=>{
    return(
        <Fragment>
             <h6 className='SubTitle'> Campus List </h6>
                            <Divider/>
                            <Timeline>
                                {List.map((data)=>(
                                  <Timeline.Item dot={data.key} color="#096dd9">
                                    {data.name}
                                  </Timeline.Item>
                                ))}
                            </Timeline>
        </Fragment>
    )
}


export default CampusList